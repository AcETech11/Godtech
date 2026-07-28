"use server";

import { getSupabaseAdmin } from "@/utils/supabase";
import { projectFormSchema } from "@/utils/schemas";

// Generate clean, secure, unique file name to avoid overlaps
function getUniqueFileName(originalName: string): string {
  const fileExt = originalName.split('.').pop() || 'png';
  const cleanName = originalName
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/[^a-zA-Z0-9]/g, "-") // sanitize to alphanumeric and hyphens
    .toLowerCase();
  const uniqueId = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
  return `${cleanName}-${uniqueId}.${fileExt}`;
}

// Uploads a single image to the `projects` bucket in Supabase Storage
export async function uploadImageToStorage(
  base64Data: string,
  originalName: string,
  contentType: string
): Promise<string> {
  const supabase = getSupabaseAdmin();

  // Convert base64 back to buffer
  const base64Content = base64Data.split(',')[1] || base64Data;
  const buffer = Buffer.from(base64Content, 'base64');
  const uniqueName = getUniqueFileName(originalName);

  const { data, error } = await supabase.storage
    .from('projects')
    .upload(uniqueName, buffer, {
      contentType,
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    console.error('Error uploading to Supabase storage:', error);
    throw new Error(`Failed to upload image ${originalName} to storage: ${error.message}`);
  }

  // Get the public URL for the newly uploaded file
  const { data: { publicUrl } } = supabase.storage
    .from('projects')
    .getPublicUrl(data.path);

  return publicUrl;
}

interface ImageUploadPayload {
  base64Data: string;
  originalName: string;
  contentType: string;
}

interface CreateProjectPayload {
  title: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  coverImage: ImageUploadPayload;
  galleryImages: ImageUploadPayload[];
}

export async function createProjectAction(payload: CreateProjectPayload) {
  console.log('SERVER ACTION START');
  console.log('FILES RECEIVED', (payload.galleryImages ? payload.galleryImages.length : 0) + (payload.coverImage ? 1 : 0));
  // Validate request parameters on server side
  const validatedFields = projectFormSchema.safeParse({
    title: payload.title,
    slug: payload.slug,
    category: payload.category,
    location: payload.location,
    description: payload.description,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const supabase = getSupabaseAdmin();

    // 1. Check if slug is unique
    const { data: existingProject } = await supabase
      .from("projects")
      .select("id")
      .eq("slug", payload.slug)
      .maybeSingle();

    if (existingProject) {
      return {
        success: false,
        error: { slug: ["A project with this slug already exists."] },
      };
    }

    // 2. Upload cover image to storage
    let coverImageUrl = "";
    if (payload.coverImage && payload.coverImage.base64Data) {
      console.log('UPLOAD START');
      coverImageUrl = await uploadImageToStorage(
        payload.coverImage.base64Data,
        payload.coverImage.originalName,
        payload.coverImage.contentType
      );
      console.log('UPLOAD SUCCESS');
    } else {
      return {
        success: false,
        error: { coverImage: ["Cover image is required."] },
      };
    }

    // 3. Upload gallery images to storage
    const galleryImageUrls: string[] = [];
    if (payload.galleryImages && payload.galleryImages.length > 0) {
      for (const img of payload.galleryImages) {
        if (img.base64Data) {
          const url = await uploadImageToStorage(
            img.base64Data,
            img.originalName,
            img.contentType
          );
          galleryImageUrls.push(url);
        }
      }
    }

    // 4. Insert project record into 'projects' table
    const { data: projectData, error: projectError } = await supabase
      .from("projects")
      .insert({
        title: payload.title,
        slug: payload.slug,
        category: payload.category,
        location: payload.location,
        description: payload.description,
        cover_image: coverImageUrl,
        // Optional completion default metadata matches mock data structure
        completion_year: new Date().getFullYear().toString(),
        technical_metric: "Godtech Quality Standard Met",
        sector: "Premium Infrastructure"
      })
      .select("id")
      .single();

    if (projectError) {
      console.error("Error inserting project:", projectError);
      throw new Error(`Database error creating project: ${projectError.message}`);
    }

    const projectId = projectData.id;
    console.log('DB INSERT SUCCESS');

    // 5. Insert multiple gallery images into 'project_images' table if available
    if (galleryImageUrls.length > 0) {
      const imagesToInsert = galleryImageUrls.map((url) => ({
        project_id: projectId,
        image_url: url,
      }));

      const { error: imagesError } = await supabase
        .from("project_images")
        .insert(imagesToInsert);

      if (imagesError) {
        console.error("Error inserting project gallery images:", imagesError);
        throw new Error(`Database error saving project gallery images: ${imagesError.message}`);
      }
    }

    return {
      success: true,
      projectId,
      slug: payload.slug,
    };
  } catch (err: unknown) {
    console.error("Action handler exception:", err);
    const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred during creation.";
    return {
      success: false,
      message: errorMessage,
    };
  }
}
