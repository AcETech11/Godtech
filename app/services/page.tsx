"use client";

import Link from "next/link";
import {
  Cpu,
  Zap,
  Droplet,
  Building,
  Wrench,
  ShieldAlert,
  Sliders,
  PhoneCall,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Services() {
  const serviceList = [
    {
      id: "generator",
      icon: Cpu,
      title: "Generator Maintenance & Emergency Power",
      subtitle: "Preventative, load-tested, defense-grade backups.",
      desc: "Our generator division is led by former military auxiliary power specialists. We manage heavy-duty diesel, gas, and hybrid generators, ensuring continuous operation during municipal grid failures.",
      features: [
        "Certified Load Bank Testing to verify thermal performance.",
        "Automatic Transfer Switch (ATS) sub-second synchronization calibration.",
        "Proprietary fuel polishing, filtration, and bio-contamination audits.",
        "24/7/365 telemetry monitoring with immediate satellite dispatch.",
        "Predictive cooling system repairs and alternator rewinding."
      ],
      specifications: [
        { name: "Unit Support Range", value: "50 kVA to 5,000 kVA (Industrial / Marine / Private)" },
        { name: "Uptime SLA", value: "99.999% Operational Readiness Guarantee" },
        { name: "Emergency Dispatch SLA", value: "Under 15 Minutes (Manhattan / Tri-State)" }
      ]
    },
    {
      id: "electrical",
      icon: Zap,
      title: "Electrical Systems & Smart Infrastructure",
      subtitle: "High-voltage diagnostics and custom power distribution.",
      desc: "From complex multi-switchboard panels in commercial skyscrapers to high-end smart-home automated switchgears in private estates, we engineer clean, safe, and balanced power distributions.",
      features: [
        "Infrared thermographic scans to identify micro-arcing and overload hazards.",
        "Power harmonics and voltage transient analysis to protect sensitive servers.",
        "Full lighting automation panel retrofitting (Lutron, Crestron, custom systems).",
        "Custom high-voltage substation maintenance and power quality mitigation.",
        "Ground fault protection verification and lightning protection integration."
      ],
      specifications: [
        { name: "System Voltages", value: "120V / 248V up to 13.8kV Medium-Voltage distribution" },
        { name: "Testing Standards", value: "NETA (InterNational Electrical Testing Association) Compliant" },
        { name: "Smart Controls", value: "BMS / SCADA panel engineering and custom PLCs" }
      ]
    },
    {
      id: "pumps",
      icon: Droplet,
      title: "Water Pumps & High-Pressure Hydraulic Systems",
      subtitle: "Precision booster pumps, filtration, and fire suppression systems.",
      desc: "Water is the lifeblood of physical systems—and one of the primary sources of facility damage. Our specialized fluid engineers design and calibrate high-pressure pumping systems for perfect delivery and safety.",
      features: [
        "Multi-pump variable-frequency drive (VFD) pressure calibrations.",
        "High-performance residential booster pumps for luxury penthouses.",
        "Reverse-osmosis filtration systems and advanced chemical feed matrices.",
        "Commercial fire suppression pump inspections and pressure regulation.",
        "Wastewater lift stations and sump-pump failure prevention telemetry."
      ],
      specifications: [
        { name: "Flow Rate Capacity", value: "Up to 12,000 GPM (Gallons Per Minute) complex arrays" },
        { name: "Materials Certified", value: "316 Marine-Grade Stainless Steel and Titanium fittings only" },
        { name: "Pressure Capabilities", value: "Up to 500 PSI hydrostatic pressure stability" }
      ]
    },
    {
      id: "building",
      icon: Building,
      title: "Comprehensive Building & Envelope Operations",
      subtitle: "Luxury residential estates and premium high-rise facility systems.",
      desc: "Our integrated facility services provide premium physical property protection. We combine traditional structural maintenance with futuristic preventative analytics.",
      features: [
        "Preventative HVAC refrigeration cycles and environmental control audits.",
        "Predictive building envelope inspections using high-resolution drone thermography.",
        "Integrated central boiler and chiller optimizations.",
        "Preventative maintenance mapping using computerized maintenance management systems (CMMS).",
        "Discreet, white-glove facility caretakers specialized in high-luxury standards."
      ],
      specifications: [
        { name: "Property Sectors", value: "Ultra-luxury penthouses, historic private estates, high-rise office towers" },
        { name: "HVAC Capacity", value: "From small split-duct units up to 10,000-ton central chiller loops" },
        { name: "Response Priority", value: "Assigned senior concierge team with dedicated dispatch lines" }
      ]
    },
    {
      id: "engineering",
      icon: Wrench,
      title: "Commercial & Residential Special Engineering",
      subtitle: "Seismic retrofitting, architectural plumbing, and mechanical design.",
      desc: "For unique technical requirements, we coordinate customized architectural, mechanical, and thermodynamic solutions. We build structures to adapt to tomorrow's challenges.",
      features: [
        "Structural retrofitting for backup generator vibration and noise isolation.",
        "Custom acoustic chamber designs for mechanical noise-level reduction (to -45dB).",
        "Seismic tie-down engineering for commercial and residential high-pressure plumbing.",
        "Custom heat exchangers, boilers, and geothermal cooling systems.",
        "Full architectural engineering consultation and project coordination."
      ],
      specifications: [
        { name: "Certification Scope", value: "Licensed Professional Engineers (P.E.) in mechanical & structural disciplines" },
        { name: "Seismic Rating", value: "Sustain structural operations under high seismic classifications" },
        { name: "Acoustic Standards", value: "NC-30 (Noise Criteria) compliant silent-engineering installations" }
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 overflow-hidden">
        {/* HEADER SECTION */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-charcoal-black via-charcoal to-charcoal-black border-b border-charcoal-muted">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1D_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1D_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <Container className="relative z-10 text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent px-3 py-1 bg-gold-accent/5 border border-gold-accent/20 rounded-full inline-block mb-6">
              Our Capabilities
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-8">
              Bespoke Engineering <span className="text-gold-accent">Catalog</span>.
            </h1>
            <p className="font-sans text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              We provide five specialized pillars of elite maintenance, retrofitting, and technical audits. Explore the full technical specifications of our services below.
            </p>
          </Container>
        </section>

        {/* SERVICES LISTING */}
        <section className="py-24 bg-charcoal">
          <Container>
            <div className="space-y-32">
              {serviceList.map((srv, idx) => {
                const Icon = srv.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={srv.id}
                    id={srv.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start scroll-mt-28`}
                  >
                    {/* Column 1: Info */}
                    <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-2xl bg-charcoal-black border border-gold-accent/30 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-gold-accent" />
                        </div>
                        <div>
                          <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent block">
                            Pillar {idx + 1}
                          </span>
                          <span className="text-neutral-400 text-xs font-semibold">{srv.subtitle}</span>
                        </div>
                      </div>

                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">
                        {srv.title}
                      </h2>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                        {srv.desc}
                      </p>

                      <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                        <Sliders className="h-4 w-4 text-gold-accent" />
                        <span>Core Operational Focus</span>
                      </h3>
                      <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                        {srv.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold-accent mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Specs Card */}
                    <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="p-8 rounded-3xl bg-charcoal-black border border-charcoal-muted relative overflow-hidden shadow-xl shadow-black/40">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 rounded-full blur-2xl pointer-events-none" />

                        <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-b border-charcoal-muted pb-4 mb-6">
                          Technical Specifications & SLAs
                        </h4>

                        <div className="space-y-6">
                          {srv.specifications.map((spec, sIdx) => (
                            <div key={sIdx} className="space-y-1.5">
                              <span className="font-heading text-[10px] font-bold tracking-widest text-gold-accent uppercase block">
                                {spec.name}
                              </span>
                              <span className="text-sm font-medium text-white block">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Interactive contact link inside specs */}
                        <div className="mt-8 pt-6 border-t border-charcoal-muted flex items-center justify-between">
                          <span className="text-xs text-neutral-400">Require this capability?</span>
                          <Link
                            href={`/contact?service=${srv.id}`}
                            className="text-xs font-heading font-bold text-gold-accent hover:text-white flex items-center gap-1 group transition-colors"
                          >
                            <span>Initiate Audit</span>
                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* COMPREHENSIVE EMERGENCY DISPATCH STATEMENT */}
        <section className="py-24 bg-charcoal-black border-t border-charcoal-muted">
          <Container>
            <div className="p-10 md:p-14 rounded-3xl bg-charcoal border border-red-900/30 relative overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/30 flex items-center justify-center flex-shrink-0 animate-pulse">
                <ShieldAlert className="h-10 w-10 text-red-500" />
              </div>

              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-red-500 block mb-1">
                  Critical Emergency Dispatch
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                  Undergoing a Catastrophic Mechanical or Grid Failure?
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  Godtech maintains an active, armored response fleet with emergency replacement fuel, high-voltage test sensors, and booster parts. We bypass standard queues for high-priority contract clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a
                    href="tel:+18005550199"
                    className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-heading text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Call +1 (800) GOD-TECH</span>
                  </a>
                  <span className="text-[11px] text-neutral-500">Average on-site NY dispatch: 12 Minutes</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
