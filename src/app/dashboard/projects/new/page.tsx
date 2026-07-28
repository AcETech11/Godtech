"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2, Upload, Trash, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";
import { projectFormSchema, ProjectFormData } from "@/utils/schemas";
import { createProjectAction } from "@/app/actions/projects";

interface FilePayload {
  base64Data: string;
  originalName: string;
  contentType: string;
}

export default function NewProject() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // States to keep track of uploaded files
  const [coverFile, setCoverFile] = useState<FilePayload | null>(null);
  const [coverFileName, setCoverFileName] = useState<string>("");
  const [galleryFiles, setGalleryFiles] = useState<FilePayload[]>([]);
  const [galleryFileNames, setGalleryFileNames] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      location: "",
      description: "",
      coverImage: undefined,
      galleryImages: undefined,
    },
  });

  const titleValue = watch("title");

  // Helper to convert File to Base64 payload
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Auto-generate slug from title
  useEffect(() => {
    if (titleValue) {
      const generatedSlug = titleValue
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // replace symbols with dashes
        .replace(/(^-|-$)+/g, ""); // trim leading/trailing dashes
      setValue("slug", generatedSlug, { shouldValidate: true });
    }
  }, [titleValue, setValue]);

  // Handle Cover Image upload conversion
  const handleCoverChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      try {
        const base64 = await fileToBase64(file);
        setCoverFile({
          base64Data: base64,
          originalName: file.name,
          contentType: file.type,
        });
        setCoverFileName(file.name);
        setValue("coverImage", base64, { shouldValidate: true });
      } catch (err) {
        console.error("Failed to read cover image file:", err);
      }
    }
  };

  // Handle Gallery Images upload conversion
  const handleGalleryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      const newFiles: FilePayload[] = [];
      const newNames: string[] = [];

      for (const file of filesArray) {
        try {
          const base64 = await fileToBase64(file);
          newFiles.push({
            base64Data: base64,
            originalName: file.name,
            contentType: file.type,
          });
          newNames.push(file.name);
        } catch (err) {
          console.error("Failed to read gallery image file:", err);
        }
      }

      setGalleryFiles((prev) => [...prev, ...newFiles]);
      setGalleryFileNames((prev) => [...prev, ...newNames]);
      setValue("galleryImages", [...galleryFiles, ...newFiles]);
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryFiles((prev) => prev.filter((_, i) => i !== index));
    setGalleryFileNames((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ProjectFormData) => {
    if (!coverFile) {
      setSubmitError("Cover image is required.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await createProjectAction({
        title: data.title,
        slug: data.slug,
        category: data.category,
        location: data.location,
        description: data.description,
        coverImage: coverFile,
        galleryImages: galleryFiles,
      });

      if (!response.success) {
        if (response.error) {
          const errorsObj = response.error as Record<string, string[]>;
          const msg = Object.values(errorsObj).flat().join(" ");
          setSubmitError(msg || "Failed to create project due to validation errors.");
        } else {
          setSubmitError(response.message || "An unexpected database write error occurred.");
        }
      } else {
        // Redirect directly to the newly created dynamic project detail view
        router.push(`/projects/${response.slug}`);
      }
    } catch (err: unknown) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "An error occurred while uploading & saving the project.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 pb-20 bg-charcoal min-h-screen text-white">
        <Container className="max-w-4xl">
          <div className="mb-8 mt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-gold-accent transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Registry
            </Link>

            <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-gold-accent px-3 py-1 bg-gold-accent/5 border border-gold-accent/20 rounded-full inline-block mb-4">
              Authorized Portal
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Deploy New Engineering <span className="text-gold-accent">Triumph</span>
            </h1>
            <p className="text-neutral-400 text-sm max-w-xl">
              Add a real-world case study to Godtech&apos;s public project portfolio registry. This action writes live records and assets directly to storage and database.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 sm:p-12 rounded-3xl bg-charcoal-black border border-charcoal-muted/60 space-y-8 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient metallic gold gradient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />

            {submitError && (
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-xs font-medium leading-relaxed">
                ⚠️ {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="flex flex-col gap-2">
                <label className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                  Project Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Commercial Generator Overhaul"
                  {...register("title")}
                  className="px-4 py-3 rounded-xl bg-charcoal border border-charcoal-muted focus:border-gold-accent focus:outline-none text-sm text-white placeholder-neutral-500 transition-colors w-full"
                />
                {errors.title && (
                  <span className="text-xs text-red-400 font-medium">{errors.title.message}</span>
                )}
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-2">
                <label className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                  Slug (Auto-generated & Editable) *
                </label>
                <input
                  type="text"
                  placeholder="commercial-generator-overhaul"
                  {...register("slug")}
                  className="px-4 py-3 rounded-xl bg-charcoal border border-charcoal-muted focus:border-gold-accent focus:outline-none text-sm text-white placeholder-neutral-500 transition-colors w-full font-mono"
                />
                {errors.slug && (
                  <span className="text-xs text-red-400 font-medium">{errors.slug.message}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category */}
              <div className="flex flex-col gap-2">
                <label className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                  Category *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Generator Maintenance"
                  {...register("category")}
                  className="px-4 py-3 rounded-xl bg-charcoal border border-charcoal-muted focus:border-gold-accent focus:outline-none text-sm text-white placeholder-neutral-500 transition-colors w-full"
                />
                {errors.category && (
                  <span className="text-xs text-red-400 font-medium">{errors.category.message}</span>
                )}
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                  Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Financial District, NYC"
                  {...register("location")}
                  className="px-4 py-3 rounded-xl bg-charcoal border border-charcoal-muted focus:border-gold-accent focus:outline-none text-sm text-white placeholder-neutral-500 transition-colors w-full"
                />
                {errors.location && (
                  <span className="text-xs text-red-400 font-medium">{errors.location.message}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                Detailed Description *
              </label>
              <textarea
                rows={6}
                placeholder="Describe the complete scope of engineering works, troubleshooting steps, and technical outcomes..."
                {...register("description")}
                className="px-4 py-3 rounded-xl bg-charcoal border border-charcoal-muted focus:border-gold-accent focus:outline-none text-sm text-white placeholder-neutral-500 transition-colors w-full resize-none leading-relaxed"
              />
              {errors.description && (
                <span className="text-xs text-red-400 font-medium">{errors.description.message}</span>
              )}
            </div>

            {/* COVER IMAGE UPLOAD */}
            <div className="flex flex-col gap-3">
              <label className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                Cover Image (Main Portrait/Landscape) *
              </label>
              <div className="relative border-2 border-dashed border-charcoal-muted hover:border-gold-accent/40 rounded-2xl p-6 transition-all bg-charcoal/30 flex flex-col items-center justify-center text-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="h-8 w-8 text-neutral-500 mb-2" />
                <span className="text-xs text-neutral-300 font-semibold mb-1">
                  {coverFileName ? coverFileName : "Click to select cover image"}
                </span>
                <span className="text-[10px] text-neutral-500 font-medium">
                  PNG, JPG, JPEG, WEBP or GIF (Up to 10MB)
                </span>
              </div>
              {coverFile && (
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gold-accent/5 border border-gold-accent/20 text-xs text-gold-accent max-w-max">
                  <ImageIcon className="h-4 w-4" />
                  <span>Cover image fully staged and ready for upload.</span>
                </div>
              )}
            </div>

            {/* GALLERY IMAGES UPLOAD */}
            <div className="flex flex-col gap-3">
              <label className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                Gallery Images (Multiple)
              </label>
              <div className="relative border-2 border-dashed border-charcoal-muted hover:border-gold-accent/40 rounded-2xl p-6 transition-all bg-charcoal/30 flex flex-col items-center justify-center text-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="h-8 w-8 text-neutral-500 mb-2" />
                <span className="text-xs text-neutral-300 font-semibold mb-1">
                  {galleryFileNames.length > 0
                    ? `${galleryFileNames.length} images staged`
                    : "Click to select multiple gallery images"}
                </span>
                <span className="text-[10px] text-neutral-500 font-medium">
                  Select one or more stunning project detail visuals
                </span>
              </div>

              {/* Staged gallery list */}
              {galleryFiles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {galleryFileNames.map((name, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal border border-charcoal-muted text-xs text-neutral-300"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <ImageIcon className="h-4 w-4 text-gold-accent flex-shrink-0" />
                        <span className="truncate">{name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="p-1.5 rounded-lg bg-charcoal-light border border-charcoal-muted text-neutral-500 hover:text-red-400 hover:border-red-500/30 transition-all cursor-pointer"
                        title="Remove image"
                      >
                        <Trash className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-6 border-t border-charcoal-muted/60 flex items-center justify-end gap-4">
              <Link
                href="/projects"
                className="px-6 py-3.5 rounded-xl border border-charcoal-muted text-neutral-400 hover:text-white transition-all font-heading text-xs font-bold uppercase tracking-widest"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-xl bg-gold-accent hover:bg-gold-bright text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <span>Publish Project</span>
                )}
              </button>
            </div>
          </form>
        </Container>
      </main>

      <Footer />
    </>
  );
}
