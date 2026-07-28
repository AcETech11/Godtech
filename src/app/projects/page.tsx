"use client";

import { useState } from "react";
import Link from "next/link";
import { Hammer, Zap, Cpu, Droplet, Building, HardHat } from "lucide-react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  sector: string;
  icon: React.ComponentType<{ className?: string }>;
  beforeDesc: string;
  afterDesc: string;
  technicalMetric: string;
  completionYear: string;
  beforeVisual: string;
  afterVisual: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<{ [key: number]: "before" | "after" }>({
    1: "after",
    2: "after",
    3: "after",
    4: "after",
    5: "after",
    6: "after"
  });

  const toggleTab = (projectId: number, state: "before" | "after") => {
    setActiveTab((prev) => ({ ...prev, [projectId]: state }));
  };

  const projectRegistry: Project[] = [
    {
      id: 1,
      title: "Commercial Generator Overhaul",
      category: "Generator Maintenance",
      location: "Financial District, NYC",
      sector: "Commercial Real Estate",
      icon: Cpu,
      beforeDesc: "Unpolished diesel fuel causing combustion misfires, unstable load balance, and 45-second latency on automatic transfer switches.",
      afterDesc: "Fully polished fuel system, recalibrated 2,500kVA backup CAT system, sub-second (0.75s) synchronous ATS power recovery.",
      technicalMetric: "Emergency Power Restore: 45s down to 0.75s",
      completionYear: "2024",
      beforeVisual: "Bg-red-950/20 border-red-500/30 text-red-400",
      afterVisual: "Bg-gold-accent/10 border-gold-accent/40 text-gold-accent"
    },
    {
      id: 2,
      title: "Penthouse Water Pump Calibration",
      category: "Water Pumps & Hydraulics",
      location: "Park Avenue, Manhattan",
      sector: "Luxury Residential Penthouse",
      icon: Droplet,
      beforeDesc: "Severe pressure drops on upper levels (above floor 40), noisy impeller vibrations, and corrosion in booster valves.",
      afterDesc: "Integrated quad-booster variable frequency drive pump array with noise decoupling mount and computerized pressure stabilization.",
      technicalMetric: "Upper Floor Pressure: Stable 65 PSI (+120%)",
      completionYear: "2024",
      beforeVisual: "Bg-red-950/20 border-red-500/30 text-red-400",
      afterVisual: "Bg-gold-accent/10 border-gold-accent/40 text-gold-accent"
    },
    {
      id: 3,
      title: "High-Voltage Switchgear Retrofit",
      category: "Electrical Systems",
      location: "Industrial Center, NJ",
      sector: "Heavy Manufacturing Hub",
      icon: Zap,
      beforeDesc: "Outdated circuit breakers exhibiting 155°C micro-arcing thermal levels, posing significant arc-flash safety hazards.",
      afterDesc: "Solid-state vacuum switchgear with integrated digital protection relays and real-time infrared diagnostic sensors.",
      technicalMetric: "Operating Temperature: 155°C down to 38°C",
      completionYear: "2023",
      beforeVisual: "Bg-red-950/20 border-red-500/30 text-red-400",
      afterVisual: "Bg-gold-accent/10 border-gold-accent/40 text-gold-accent"
    },
    {
      id: 4,
      title: "Historic Private Estate Envelope Care",
      category: "Building Maintenance",
      location: "The Hamptons, NY",
      sector: "Private Historic Landmark",
      icon: Building,
      beforeDesc: "Undiagnosed moisture ingress in basement foundations, unbalanced central air chillers, and outdated analog controls.",
      afterDesc: "Exterior membrane thermal envelope seal, custom smart chillers, and remote tablet-controlled facility management system.",
      technicalMetric: "Humidity Level: 68% stabilized to 45% standard",
      completionYear: "2024",
      beforeVisual: "Bg-red-950/20 border-red-500/30 text-red-400",
      afterVisual: "Bg-gold-accent/10 border-gold-accent/40 text-gold-accent"
    },
    {
      id: 5,
      title: "Commercial Boiler & Thermal Loop",
      category: "Commercial Engineering",
      location: "Midtown Office Tower, NY",
      sector: "Multi-Tenant Skyscrapers",
      icon: HardHat,
      beforeDesc: "Scale buildup in dual 1980s low-pressure steam boilers, causing restricted heating flow rates and heavy carbon emissions.",
      afterDesc: "High-efficiency condensing modular boilers with automated chemical dosing and motorized balance valves.",
      technicalMetric: "Fuel Conservation Rate: +38% annual savings",
      completionYear: "2023",
      beforeVisual: "Bg-red-950/20 border-red-500/30 text-red-400",
      afterVisual: "Bg-gold-accent/10 border-gold-accent/40 text-gold-accent"
    },
    {
      id: 6,
      title: "Acoustic Generator Isolation Chamber",
      category: "Residential Engineering",
      location: "Biscayne Bay, Miami",
      sector: "Coastal Luxury Villa",
      icon: Hammer,
      beforeDesc: "Open standby generator producing 88dB of structural noise, violating municipal luxury residential acoustic codes.",
      afterDesc: "Custom-engineered double-walled acoustic weather chamber with acoustic baffles and vibration-isolation pads.",
      technicalMetric: "Acoustic Footprint: 88dB reduced to 42dB (NC-30)",
      completionYear: "2024",
      beforeVisual: "Bg-red-950/20 border-red-500/30 text-red-400",
      afterVisual: "Bg-gold-accent/10 border-gold-accent/40 text-gold-accent"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 overflow-hidden">
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
            <p className="font-sans text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Explore 6 case studies demonstrating our absolute engineering capabilities across backup power generators, high-pressure hydraulics, and luxury facilities.
            </p>
          </Container>
        </section>

        {/* PROJECTS REGISTRY GRID */}
        <section className="py-24 bg-charcoal">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectRegistry.map((proj) => {
                const Icon = proj.icon;
                const viewState = activeTab[proj.id] || "after";

                return (
                  <div
                    key={proj.id}
                    className="rounded-3xl bg-charcoal-black border border-charcoal-muted hover:border-gold-accent/30 transition-all duration-300 flex flex-col h-full overflow-hidden"
                  >
                    {/* Before/After Visual Representation Block */}
                    <div className="relative h-60 border-b border-charcoal-muted flex flex-col justify-between p-6 overflow-hidden bg-charcoal-black/80">
                      {/* Grid background */}
                      <div className="absolute inset-0 bg-[radial-gradient(#1A1A1D_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

                      {/* Header in visual block */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[10px] font-heading font-extrabold tracking-widest uppercase text-neutral-500 bg-charcoal-light border border-charcoal-muted px-2.5 py-1 rounded">
                          {proj.location}
                        </span>
                        <div className="p-2 rounded bg-charcoal-light border border-charcoal-muted">
                          <Icon className="h-4 w-4 text-gold-accent" />
                        </div>
                      </div>

                      {/* Interactive Visual Comparison Display */}
                      <div className="relative z-10 my-4 flex-1 flex items-center justify-center">
                        <div className="w-full text-center py-6 px-4 rounded-xl border border-dashed transition-all duration-500">
                          {viewState === "before" ? (
                            <div className="animate-fade-in text-red-400">
                              <div className="font-heading text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                                Fault State Active
                              </div>
                              <p className="text-[11px] text-neutral-400 font-mono leading-relaxed line-clamp-3">
                                {proj.beforeDesc}
                              </p>
                            </div>
                          ) : (
                            <div className="animate-fade-in text-gold-accent">
                              <div className="font-heading text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-gold-accent" />
                                Godtech Calibration Standard
                              </div>
                              <p className="text-[11px] text-neutral-200 font-mono leading-relaxed line-clamp-3">
                                {proj.afterDesc}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Tabs Controller */}
                      <div className="relative z-10 flex items-center justify-between gap-2 bg-charcoal-light border border-charcoal-muted p-1 rounded-full w-full">
                        <button
                          onClick={() => toggleTab(proj.id, "before")}
                          className={`flex-1 text-center py-1.5 rounded-full font-heading text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
                            viewState === "before"
                              ? "bg-red-500/20 text-red-400 border border-red-500/30"
                              : "text-neutral-500 hover:text-white"
                          }`}
                        >
                          Show Before
                        </button>
                        <button
                          onClick={() => toggleTab(proj.id, "after")}
                          className={`flex-1 text-center py-1.5 rounded-full font-heading text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
                            viewState === "after"
                              ? "bg-gold-accent text-neutral-950 font-extrabold"
                              : "text-neutral-500 hover:text-white"
                          }`}
                        >
                          Show After
                        </button>
                      </div>
                    </div>

                    {/* Meta and content information */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="font-heading text-[10px] font-bold tracking-widest uppercase text-gold-accent bg-gold-accent/5 px-2.5 py-1 rounded">
                          {proj.category}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-white mt-4 mb-3">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                          {viewState === "before" ? proj.beforeDesc : proj.afterDesc}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-charcoal-muted flex flex-col gap-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-500 font-medium">Metric Gain:</span>
                          <span className="text-white font-mono font-bold">{proj.technicalMetric}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-500 font-medium">Sector Type:</span>
                          <span className="text-neutral-300 font-semibold">{proj.sector}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-500 font-medium">Completed:</span>
                          <span className="text-neutral-300 font-semibold">{proj.completionYear}</span>
                        </div>
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
