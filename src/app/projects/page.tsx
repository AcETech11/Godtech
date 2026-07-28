import Link from "next/link";
import { Cpu, Hammer, Plus, Zap, Droplet, Building, HardHat } from "lucide-react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";
import Image from "next/image";
import { supabaseClient } from "@/utils/supabase";

// Force dynamic so data updates in real-time
export const revalidate = 0;

interface DBProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  description: string;
  cover_image: string;
  completion_year?: string;
  technical_metric?: string;
  sector?: string;
  created_at: string;
}

// Staged default high-end projects for offline fallback or demonstration
const mockProjects: DBProject[] = [
  {
    id: "1",
    title: "Commercial Generator Overhaul",
    category: "Generator Maintenance",
    location: "Financial District, NYC",
    description: "Fully polished fuel system, recalibrated 2,500kVA backup CAT system, sub-second (0.75s) synchronous ATS power recovery.",
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
    description: "Integrated quad-booster variable frequency drive pump array with noise decoupling mount and computerized pressure stabilization.",
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
    description: "Solid-state vacuum switchgear with integrated digital protection relays and real-time infrared diagnostic sensors.",
    cover_image: "",
    completion_year: "2023",
    technical_metric: "Operating Temperature: 155°C down to 38°C",
    sector: "Heavy Manufacturing Hub",
    created_at: new Date().toISOString()
  }
];

export default async function Projects() {
  let projectsList: DBProject[] = [];
  let isFallback = false;

  const isSupabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.includes("your_anon_key_here");

  if (isSupabaseConfigured) {
    try {
      // Query Supabase database to fetch real projects
      const { data: dbProjects, error } = await supabaseClient
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Failed to fetch projects from Supabase database:", error.message);
        isFallback = true;
      } else if (dbProjects) {
        projectsList = dbProjects;
      }
    } catch (err: unknown) {
      console.warn("Fetch exception while retrieving projects:", err);
      isFallback = true;
    }
  } else {
    isFallback = true;
  }

  // Fallback to high-end mock data if database is not configured or throws error
  if (isFallback || projectsList.length === 0) {
    projectsList = mockProjects;
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 overflow-hidden bg-charcoal min-h-screen text-white">
        {/* HEADER */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-charcoal-black via-charcoal to-charcoal-black border-b border-charcoal-muted">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1D_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1D_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <Container className="relative z-10 text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent px-3 py-1 bg-gold-accent/5 border border-gold-accent/20 rounded-full inline-block mb-6">
              The Registry
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-8">
              Proven Engineering <span className="text-gold-accent">Triumphs</span>.
            </h1>
            <p className="font-sans text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore our real-world case studies demonstrating absolute engineering capabilities across backup power generators, high-pressure hydraulics, and luxury facilities.
            </p>

            {/* Quick Access to Project Creation for Demonstration/Testing */}
            <div className="flex justify-center">
              <Link
                href="/dashboard/projects/new"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gold-accent hover:bg-gold-bright text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/20"
              >
                <Plus className="h-4 w-4" />
                <span>Publish New Project</span>
              </Link>
            </div>
          </Container>
        </section>

        {/* PROJECTS REGISTRY GRID */}
        <section className="py-24 bg-charcoal">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsList.map((proj) => {
                return (
                  <div
                    key={proj.id}
                    className="rounded-3xl bg-charcoal-black border border-charcoal-muted hover:border-gold-accent/30 transition-all duration-300 flex flex-col h-full overflow-hidden group"
                  >
                    {/* Image / Cover visual representation block */}
                    <div className="relative h-60 border-b border-charcoal-muted overflow-hidden bg-charcoal-black/80 flex items-center justify-center">
                      {proj.cover_image ? (
                        <Image
                          src={proj.cover_image}
                          alt={proj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal-light">
                          <Cpu className="h-10 w-10 text-neutral-500 mb-2" />
                          <span className="text-xs text-neutral-500 font-mono">Staging Asset</span>
                        </div>
                      )}

                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] font-heading font-extrabold tracking-widest uppercase text-white bg-charcoal-black/80 backdrop-blur border border-charcoal-muted px-2.5 py-1 rounded">
                          {proj.location}
                        </span>
                      </div>
                    </div>

                    {/* Meta and content information */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="font-heading text-[10px] font-bold tracking-widest uppercase text-gold-accent bg-gold-accent/5 px-2.5 py-1 rounded">
                          {proj.category}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-white mt-4 mb-3 group-hover:text-gold-accent transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                          {proj.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-charcoal-muted flex flex-col gap-4">
                        <div className="flex flex-col gap-2.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-neutral-500 font-medium">Metric Gain:</span>
                            <span className="text-white font-mono font-bold">{proj.technical_metric || "Godtech Verified"}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-neutral-500 font-medium">Sector Type:</span>
                            <span className="text-neutral-300 font-semibold">{proj.sector || "Premium Infrastructure"}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-neutral-500 font-medium">Completed:</span>
                            <span className="text-neutral-300 font-semibold">{proj.completion_year || new Date(proj.created_at).getFullYear()}</span>
                          </div>
                        </div>

                        <Link
                          href={`/projects/${proj.slug}`}
                          className="w-full text-center py-3.5 rounded-xl border border-gold-accent/20 hover:border-gold-accent bg-gold-accent/5 hover:bg-gold-accent text-gold-accent hover:text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 block"
                        >
                          Examine Blueprint
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CUSTOM STANDARDS PROMISE */}
        <section className="py-24 bg-charcoal-black border-t border-charcoal-muted text-center relative">
          <Container>
            <div className="max-w-3xl mx-auto">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent block mb-3">
                Uncompromising Execution
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Asset is Next. Let&apos;s Design Your Success.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
                All repairs and upgrades are completed alongside thorough computerized CAD plotting, electrical blueprints, and fluid dynamics testing reports given directly to you upon handoff.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gold-accent hover:bg-gold-bright text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/20"
                >
                  Initiate Project Discussion
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
