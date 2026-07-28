"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Wrench,
  Zap,
  Award,
  ChevronRight,
  Droplet,
  Building,
  Quote
} from "lucide-react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";

// Variants for subtle entry animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const stats = [
    { value: "99.99%", label: "Uptime Guaranteed", desc: "For industrial, emergency, and backup power generators." },
    { value: "12 Min", label: "Emergency Response", desc: "Unmatched critical dispatch for high-voltage and pump failures." },
    { value: "500+", label: "Elite Assets Maintained", desc: "Commercial towers, superyachts, and high-profile private estates." },
    { value: "100%", label: "Certified Senior Engineers", desc: "No junior staff. Direct access to elite masters of the craft." }
  ];

  const services = [
    {
      icon: Cpu,
      title: "Generator Maintenance",
      desc: "Comprehensive diagnostic testing, load bank analysis, fuel polishing, and emergency restoration. We secure your ultimate power defense.",
      href: "/services#generator"
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      desc: "High-voltage diagnostics, thermal imaging, power quality analysis, custom switchgear engineering, and luxury home automation control panels.",
      href: "/services#electrical"
    },
    {
      icon: Droplet,
      title: "Water Pumps & Fluids",
      desc: "Industrial booster pump integration, water treatment systems, fire protection pressure controls, and advanced hydraulic engineering.",
      href: "/services#pumps"
    },
    {
      icon: Building,
      title: "Building Maintenance",
      desc: "Complete luxury estate and high-rise envelope management, integrated HVAC optimization, predictive structural analysis, and smart building care.",
      href: "/services#building"
    },
    {
      icon: Wrench,
      title: "Commercial & Residential Engineering",
      desc: "Bespoke architectural retrofitting, seismic dampening, advanced thermodynamics, and luxury plumbing infrastructure engineered for life.",
      href: "/services#engineering"
    }
  ];

  const projects = [
    {
      title: "Manhattan Penthouse Tower",
      category: "Electrical & HVAC Overhaul",
      before: "Frequent voltage drops, failing 1990s boilers, and unbalanced booster pump pressure.",
      after: "Custom computerized solid-state switchgear and multi-stage variable speed water boosters with zero noise emission.",
      stats: "Energy cost -32% | Uptime 100%"
    },
    {
      title: "Waterfront Estate Generator",
      category: "Emergency Backup Integration",
      before: "Exposed, loud generator causing municipal noise violations and slow auto-transfer times (45s).",
      after: "Custom acoustic-dampening 200kVA CAT system with automatic transfer sub-second synchronization (0.8s).",
      stats: "Noise level -45dB | Auto-switch 0.8s"
    },
    {
      title: "Commercial Industrial Hub",
      category: "Water Pump & Hydraulic Matrix",
      before: "Corroded main supply pumps leading to critical low-flow pressure in commercial fire suppression systems.",
      after: "Grade-316 stainless steel multi-pump system with computerized real-time flow meters and backup diesel drive.",
      stats: "Supply rate +150% | Pressure stabilized"
    }
  ];

  const testimonials = [
    {
      quote: "Godtech redefined our facility operations. Their response time is not a marketing promise—it is an absolute standard. When our backup generator suffered a cooling failure, they had a helicopter dispatch team on site in under 15 minutes.",
      author: "Marcus Vance",
      title: "Director of Facilities, Obsidian Plaza NY",
      rating: "★★★★★"
    },
    {
      quote: "Luxury estate maintenance requires ultimate discretion and absolute technical competence. The engineers who handle our electrical and hydraulic systems are clearly at the absolute top of their international fields. Superior work.",
      author: "Elena Rostova",
      title: "Private Estate Manager, Palm Beach",
      rating: "★★★★★"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 overflow-hidden">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center py-20 bg-gradient-to-b from-charcoal-black via-charcoal to-charcoal-black">
          {/* Subtle geometric luxury background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1D_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1D_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

          {/* Golden radial background flare */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <Container className="relative z-10 text-center flex flex-col items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-light border border-gold-accent/20 mb-8"
            >
              <Award className="h-4 w-4 text-gold-accent" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                The Elite Class of Engineering & Maintenance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-8"
            >
              Absolute System <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-white to-gold-accent">Precision</span> and Reliability.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-sans text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed mb-12"
            >
              Godtech provides bespoke engineering and preventative maintenance solutions for premier commercial properties, high-profile industrial hubs, and luxury private estates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-accent to-gold-dark hover:from-gold-bright hover:to-gold-accent text-neutral-950 font-heading text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-gold-accent/10 hover:shadow-gold-accent/20 hover:-translate-y-0.5 text-center"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal-light/80 hover:bg-charcoal border border-charcoal-muted hover:border-gold-accent/40 text-white font-heading text-sm font-bold tracking-widest uppercase transition-all duration-300 text-center"
              >
                Our Services
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* 2. TRUST / STATS SECTION */}
        <section className="py-24 bg-charcoal-black border-y border-charcoal-muted">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                  }}
                  className="p-8 rounded-2xl bg-gradient-to-b from-charcoal to-charcoal-black border border-charcoal-muted/50 hover:border-gold-accent/30 transition-all duration-500 group"
                >
                  <div className="font-heading text-4xl lg:text-5xl font-extrabold text-gold-accent mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </div>
                  <div className="font-heading text-sm font-bold text-white tracking-wide mb-2 uppercase">
                    {stat.label}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. SERVICES PREVIEW */}
        <section className="py-28 bg-charcoal relative">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                  Bespoke Capabilities
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
                  Unrivaled Engineering Services
                </h2>
              </div>
              <Link
                href="/services"
                className="font-heading text-sm font-bold text-gold-accent hover:text-white transition-colors flex items-center gap-2 group whitespace-nowrap"
              >
                <span>View All Custom Services</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((srv, index) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-8 rounded-3xl bg-charcoal-black border border-charcoal-muted hover:border-gold-accent/40 transition-all duration-500 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3 w-12 h-12 rounded-2xl bg-charcoal-light border border-charcoal-muted group-hover:border-gold-accent/30 flex items-center justify-center mb-6 group-hover:bg-gold-accent/5 transition-all duration-500">
                        <Icon className="h-5 w-5 text-gold-accent group-hover:text-gold-bright transition-colors" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white mb-4 group-hover:text-gold-accent transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        {srv.desc}
                      </p>
                    </div>
                    <Link
                      href={srv.href}
                      className="text-xs font-heading font-bold uppercase tracking-widest text-neutral-300 hover:text-white flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
                    >
                      <span>Explore Technical Specs</span>
                      <ChevronRight className="h-3.5 w-3.5 text-gold-accent" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </Container>
        </section>

        {/* 4. FEATURED PROJECTS PREVIEW */}
        <section className="py-28 bg-charcoal-black border-t border-charcoal-muted relative">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                  Precision in Action
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
                  Featured Case Investigations
                </h2>
              </div>
              <Link
                href="/projects"
                className="font-heading text-sm font-bold text-gold-accent hover:text-white transition-colors flex items-center gap-2 group whitespace-nowrap"
              >
                <span>View Full Registry</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((proj, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.15 } }
                  }}
                  className="rounded-3xl bg-charcoal border border-charcoal-muted overflow-hidden hover:border-gold-accent/40 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Decorative visual block acting as a premium structural abstract placeholder */}
                  <div className="h-44 bg-charcoal-black relative border-b border-charcoal-muted flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-accent/5 to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-[radial-gradient(#1A1A1D_1.5px,transparent_1.5px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                    <div className="relative font-heading text-[10px] font-bold text-gold-accent tracking-[0.25em] uppercase px-4 py-2 border border-gold-accent/20 rounded bg-charcoal-black/80">
                      Before & After Case Study
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-heading text-[10px] font-bold tracking-widest uppercase text-gold-accent bg-gold-accent/5 px-2.5 py-1 rounded">
                        {proj.category}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-white mt-4 mb-6">
                        {proj.title}
                      </h3>

                      {/* Before / After comparisons */}
                      <div className="space-y-4 text-xs mb-8">
                        <div className="p-3.5 rounded-xl bg-charcoal-black/40 border-l-2 border-red-500/50">
                          <span className="font-heading font-bold text-red-500 uppercase tracking-wider block mb-1">Before Godtech:</span>
                          <span className="text-neutral-400 font-sans leading-relaxed">{proj.before}</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-gold-accent/5 border-l-2 border-gold-accent">
                          <span className="font-heading font-bold text-gold-accent uppercase tracking-wider block mb-1">After Godtech:</span>
                          <span className="text-neutral-200 font-sans leading-relaxed">{proj.after}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-charcoal-muted/50 flex items-center justify-between text-xs text-neutral-400">
                      <span className="font-semibold text-white">{proj.stats}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. COMMUNITY PREVIEW */}
        <section className="py-28 bg-charcoal relative">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                Community Trust & Standards
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
                Tested by the Highest Standards of Industry
              </h2>
              <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
                We believe that premium engineering is not just about repairs—it is a dedication to safety, environmental sustainability, and maintaining client trust at every responsive intersection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((test, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                  }}
                  className="p-8 rounded-3xl bg-charcoal-black border border-charcoal-muted relative flex flex-col justify-between"
                >
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-gold-accent/5 pointer-events-none" />
                  <div>
                    <div className="text-gold-accent font-bold tracking-widest text-sm mb-4">
                      {test.rating}
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed italic mb-8">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-charcoal-muted/50 pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-heading text-sm font-bold text-white">{test.author}</h4>
                      <p className="text-[11px] text-neutral-500 mt-0.5">{test.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. CTA SECTION */}
        <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal-black border-t border-charcoal-muted relative">
          <Container>
            <div className="relative rounded-3xl bg-charcoal-black border border-gold-accent/30 p-12 md:p-16 overflow-hidden flex flex-col items-center text-center max-w-5xl mx-auto">
              {/* Subtle visual grid inside CTA */}
              <div className="absolute inset-0 bg-[radial-gradient(#1A1A1D_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                  Immediate Dispatch & Advisory
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
                  Uncompromised Engineering Awaits. Let&apos;s Secure Your Assets.
                </h2>
                <p className="text-sm text-neutral-400 mb-10 leading-relaxed">
                  Connect with a premium concierge. We coordinate on-site mechanical, electrical, and plumbing engineering audits, as well as 24/7 priority response setup.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-accent hover:bg-gold-bright text-neutral-950 font-heading text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/20"
                  >
                    Initiate Audit Form
                  </Link>
                  <a
                    href="tel:+18005550199"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal-light border border-charcoal-muted hover:border-gold-accent/50 text-white font-heading text-sm font-bold tracking-widest uppercase transition-colors text-center"
                  >
                    Direct Dispatch Line
                  </a>
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
