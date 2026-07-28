import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Tag, Calendar, Cpu, HardHat, Sparkles } from "lucide-react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";
import { supabaseClient } from "@/utils/supabase";

export const revalidate = 0;

interface ProjectImage {
  id: string;
  image_url: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Staged default high-end projects for offline fallback or demonstration
const mockProjects = [
  {
    id: "1",
    title: "Commercial Generator Overhaul",
    category: "Generator Maintenance",
    location: "Financial District, NYC",
    description: "Fully polished fuel system, recalibrated 2,500kVA backup CAT system, sub-second (0.75s) synchronous ATS power recovery. Outdated switchgears and thermal loops were totally overhauled under strict Godtech standards.",
    cover_image: "",
    completion_year: "2024",
    technical_metric: "Emergency Power Restore: 45s down to 0.75s",
    sector: "Commercial Real Estate",
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "Penthouse Water Pump Calibration",
    category: "Water Pumps & Hydraulics",
    location: "Park Avenue, Manhattan",
    description: "Integrated quad-booster variable frequency drive pump array with noise decoupling mount and computerized pressure stabilization. Resolves high-altitude dropoffs seamlessly.",
    cover_image: "",
    completion_year: "2024",
    technical_metric: "Upper Floor Pressure: Stable 65 PSI (+120%)",
    sector: "Luxury Residential Penthouse",
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    title: "High-Voltage Switchgear Retrofit",
    category: "Electrical Systems",
    location: "Industrial Center, NJ",
    description: "Solid-state vacuum switchgear with integrated digital protection relays and real-time infrared diagnostic sensors. Mitigates high micro-arcing hazard layers safely.",
    cover_image: "",
    completion_year: "2023",
    technical_metric: "Operating Temperature: 155°C down to 38°C",
    sector: "Heavy Manufacturing Hub",
    created_at: new Date().toISOString()
  }
];

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let project = null;
  let galleryImages: ProjectImage[] = [];
  let isFallback = false;

  const isSupabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.includes("your_anon_key_here");

  if (isSupabaseConfigured) {
    try {
      // 1. Fetch project from Database based on unique slug
      const { data: dbProject, error: projectError } = await supabaseClient
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (projectError) {
        console.warn("Database query failed for project:", projectError.message);
        isFallback = true;
      } else if (dbProject) {
        project = dbProject;

        // 2. Fetch all related project images from project_images
        const { data: images, error: imagesError } = await supabaseClient
          .from("project_images")
          .select("*")
          .eq("project_id", project.id);

        if (imagesError) {
          console.warn("Database query failed for project images:", imagesError.message);
        } else if (images) {
          galleryImages = images;
        }
      }
    } catch (err: unknown) {
      console.warn("Fetch exception while retrieving project detail:", err);
      isFallback = true;
    }
  } else {
    isFallback = true;
  }

  // Fallback to offline mock records if database is not configured or slug is found in mocks
  if (isFallback || !project) {
    const matched = mockProjects.find((p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") === slug);
    if (matched) {
      project = matched;
    }
  }

  if (!project) {
    notFound();
  }

  const projectDate = new Date(project.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 pb-24 bg-charcoal text-white min-h-screen">
        <Container>
          {/* Back Nav Link */}
          <div className="mb-8 mt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-gold-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Registry
            </Link>
          </div>

          {/* PROJECT CORE BODY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side: Main details */}
            <div className="lg:col-span-7 space-y-8">
              {/* Cover Image Block */}
              <div className="relative h-[25rem] sm:h-[32rem] rounded-3xl overflow-hidden border border-charcoal-muted/60 shadow-2xl">
                {project.cover_image ? (
                  <Image
                    src={project.cover_image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal-black">
                    <Cpu className="h-12 w-12 text-neutral-600 animate-pulse mb-2" />
                    <span className="text-xs text-neutral-500 font-mono">Staging Asset</span>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {project.title}
                </h1>
                <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed whitespace-pre-line pt-4 border-t border-charcoal-muted">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Right side: Project Meta Card */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="p-8 rounded-3xl bg-charcoal-black border border-charcoal-muted/60 space-y-6 relative overflow-hidden shadow-xl">
                {/* Visual glowing overlay accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold-accent/5 rounded-full blur-2xl pointer-events-none" />

                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent border-b border-charcoal-muted/60 pb-4 flex items-center gap-2">
                  <HardHat className="h-4 w-4" />
                  <span>Technical Specifications</span>
                </h3>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="p-2.5 rounded-lg bg-charcoal border border-charcoal-muted text-gold-accent flex-shrink-0">
                      <Tag className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Category</p>
                      <p className="text-white font-semibold text-xs sm:text-sm">{project.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="p-2.5 rounded-lg bg-charcoal border border-charcoal-muted text-gold-accent flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Location</p>
                      <p className="text-white font-semibold text-xs sm:text-sm">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="p-2.5 rounded-lg bg-charcoal border border-charcoal-muted text-gold-accent flex-shrink-0">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Completed Date</p>
                      <p className="text-white font-semibold text-xs sm:text-sm">{projectDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="p-2.5 rounded-lg bg-charcoal border border-charcoal-muted text-gold-accent flex-shrink-0">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Metric Outcome</p>
                      <p className="text-white font-semibold text-xs sm:text-sm font-mono">{project.technical_metric || "Standard Calibrated"}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-charcoal-muted/60">
                  <div className="p-4 rounded-xl bg-charcoal/40 border border-charcoal-muted/40 text-center text-[10px] sm:text-xs text-neutral-400 font-medium">
                    This build represents official certification under standard protocols of GODTECH Global.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC RESPONSIVE IMAGE GALLERY */}
          {galleryImages.length > 0 && (
            <div className="mt-16 sm:mt-24 pt-12 border-t border-charcoal-muted/60 space-y-8">
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-5 w-5 text-gold-accent" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold">Project Gallery Details</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id || index}
                    className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-muted hover:border-gold-accent/40 transition-all group shadow-md"
                  >
                    <Image
                      src={image.image_url}
                      alt={`${project.title} Gallery visual ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}
