import { z } from 'zod';

// Form validation schema (used by React Hook Form & Zod on the client-side/server-side validation)
export const projectFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.').max(100, 'Title is too long.'),
  slug: z.string()
    .min(3, 'Slug must be at least 3 characters.')
    .regex(/^[a-z0-9-]+$/, 'Slug must only contain lowercase alphanumeric characters and hyphens.')
    .max(100, 'Slug is too long.'),
  category: z.string().min(2, 'Category is required.'),
  location: z.string().min(2, 'Location is required.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  // In React Hook Form, the cover image and gallery images will be validated as FileLists or arrays of File/any objects.
  coverImage: z.any().optional(),
  galleryImages: z.any().optional(),
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;
