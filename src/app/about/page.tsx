"use client";

import Link from "next/link";
import { Award, ShieldCheck, History, Users } from "lucide-react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality Standards",
      desc: "Every calibration, component replacement, and system integration must meet elite-class standards. We tolerate zero margin of error."
    },
    {
      icon: Award,
      title: "Master Craftsmen Only",
      desc: "We do not hire junior technicians. Every Godtech expert is a veteran engineer possessing a minimum of 10 years of complex field mastery."
    },
    {
      icon: History,
      title: "Preventative Integrity",
      desc: "We utilize predictive telemetry and computer thermal analysis to resolve catastrophic generator and hydraulic issues before they ever manifest."
    }
  ];

  const milestones = [
    {
      year: "2012",
      title: "The Genesis of Godtech",
      desc: "Founded by a group of retired aerospace and high-voltage engineers in New York, set out to bring defense-grade precision to commercial assets."
    },
    {
      year: "2016",
      title: "Luxury Sector Integration",
      desc: "Expanded services to premier estates and superyachts, integrating smart automated controls with legacy backup power generators."
    },
    {
      year: "2020",
      title: "Critical Infrastructure Launch",
      desc: "Contracted with national commercial towers and financial centers to establish our 12-minute rapid response guarantee."
    },
    {
      year: "2025",
      title: "Next-Gen Telemetry",
      desc: "Deployed proprietary AI diagnostic monitors on all premium backup pumps and switchgears, enabling real-time fault prevention."
    }
  ];

  const team = [
    {
      name: "Dr. Alistair Vance",
      role: "Chief Executive & Founder",
      bio: "Former aerospace fluid dynamics lead with 25+ years in high-performance mechanical systems and industrial infrastructure design.",
      specialty: "High-voltage grids & turbine systems"
    },
    {
      name: "Sarah Lin, P.E.",
      role: "Chief of Electrical Engineering",
      bio: "An MIT graduate who spent a decade engineering fault-tolerant electrical grids and microgrid backup generators for research labs.",
      specialty: "Power Quality, Automated Switchgear"
    },
    {
      name: "Robert 'Mac' Macalister",
      role: "Director of Hydraulics & Pumps",
      bio: "Legendary marine engineer specializing in heavy-duty pump designs, high-pressure boilers, and critical booster operations.",
      specialty: "Variable-frequency drive pump arrays"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 overflow-hidden">
        {/* HERO HEADER */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-charcoal-black via-charcoal to-charcoal-black border-b border-charcoal-muted">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1D_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1D_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <Container className="relative z-10 text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent px-3 py-1 bg-gold-accent/5 border border-gold-accent/20 rounded-full inline-block mb-6">
              Who We Are
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-8">
              Engineered for Absolute <span className="text-gold-accent">Certainty</span>.
            </h1>
            <p className="font-sans text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              At Godtech, we believe the infrastructure of your high-profile assets should operate seamlessly, quietly, and indefinitely. We exist to provide the ultimate shield of protection.
            </p>
          </Container>
        </section>

        {/* MISSION & VISION WITH SPLIT CONTENT */}
        <section className="py-24 bg-charcoal">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                  The Philosophy
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
                  Elite Systems Deserve Elite Preservation.
                </h2>
                <div className="space-y-6 text-sm text-neutral-400 leading-relaxed">
                  <p>
                    Every technical asset, whether it is a multi-megawatt backup generator or a complex multi-pump reverse-osmosis array, is a critical cog in your operation. Minor failures compound into catastrophic losses.
                  </p>
                  <p>
                    That is why Godtech applies a rigorous aerospace-inspired methodology to facility maintenance. We do not patch problems; we engineer them out of existence. By combining state-of-the-art telemetry diagnostics with decades of heavy-industry engineering knowledge, we ensure total uptime.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-charcoal-black border border-charcoal-muted">
                    <div className="font-heading text-2xl font-bold text-gold-accent">100%</div>
                    <div className="text-xs text-neutral-400 mt-1">Client Retention Rate</div>
                  </div>
                  <div className="p-4 rounded-xl bg-charcoal-black border border-charcoal-muted">
                    <div className="font-heading text-2xl font-bold text-gold-accent">24/7/365</div>
                    <div className="text-xs text-neutral-400 mt-1">Continuous Vigilance</div>
                  </div>
                </div>
              </div>

              {/* Graphical Placeholder */}
              <div className="relative p-8 rounded-3xl bg-charcoal-black border border-charcoal-muted/60 h-[380px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/5 to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(#1A1A1D_1.5px,transparent_1.5px)] bg-[size:24px_24px]" />
                <div className="relative text-center max-w-sm px-6">
                  <div className="h-14 w-14 rounded-2xl bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="h-6 w-6 text-gold-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">ISO 9001:2015 Certified</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Licensed & fully credentialed global engineering firm complying with the strictest mechanical, electrical, and aerospace guidelines.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CORE VALUES */}
        <section className="py-24 bg-charcoal-black border-y border-charcoal-muted">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                Our Foundation
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                Core Pillars of Godtech
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-charcoal border border-charcoal-muted flex flex-col gap-5 hover:border-gold-accent/30 transition-all duration-300"
                  >
                    <div className="p-3 w-12 h-12 rounded-xl bg-charcoal-black border border-charcoal-muted flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold-accent" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white">
                      {val.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* MILESTONES / COMPANY TIMELINE */}
        <section className="py-24 bg-charcoal">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                The Heritage
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                A History of Precision
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative border-l border-charcoal-muted pl-8 md:pl-12 space-y-12">
              {milestones.map((ms, idx) => (
                <div key={idx} className="relative group">
                  {/* Bullet */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-charcoal border-2 border-gold-accent flex items-center justify-center group-hover:bg-gold-accent transition-colors duration-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-charcoal-black" />
                  </div>

                  <div>
                    <span className="font-heading text-lg font-extrabold text-gold-accent tracking-widest">
                      {ms.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white mt-1 mb-2">
                      {ms.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                      {ms.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* TEAM LEADERS */}
        <section className="py-24 bg-charcoal-black border-t border-charcoal-muted">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                The Architects
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
                Senior Engineering Council
              </h2>
              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                Meet the veteran engineers responsible for directing our customized maintenance protocols, emergency diagnostics, and advisory boards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-charcoal border border-charcoal-muted overflow-hidden flex flex-col h-full hover:border-gold-accent/30 transition-all duration-300"
                >
                  {/* abstract graphic avatar placeholder */}
                  <div className="h-40 bg-charcoal-black border-b border-charcoal-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-accent/5 to-transparent" />
                    <Users className="h-10 w-10 text-gold-accent/20" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-base font-bold text-white">
                        {member.name}
                      </h3>
                      <span className="text-xs font-heading font-medium text-gold-accent tracking-wider block mt-1 mb-4">
                        {member.role}
                      </span>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-charcoal-muted/40 text-[11px] text-neutral-400">
                      <span className="font-heading font-bold text-gold-accent uppercase tracking-widest block mb-1">Sector Specialty:</span>
                      <span>{member.specialty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA TO SERVICES */}
        <section className="py-20 bg-charcoal text-center">
          <Container>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-6">
              Ready to experience absolute precision?
            </h2>
            <p className="text-sm text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
              Explore our comprehensive range of specialized generator, electrical, and commercial/residential engineering operations.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full bg-gold-accent hover:bg-gold-bright text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                View Services Catalog
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
