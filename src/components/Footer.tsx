import Link from "next/link";
import { Mail, Phone, MapPin, Hammer, ArrowUpRight } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { name: "Generator Maintenance", href: "/services#generator" },
    { name: "Electrical Systems", href: "/services#electrical" },
    { name: "Water Pumps", href: "/services#pumps" },
    { name: "Building Maintenance", href: "/services#building" },
    { name: "Commercial Engineering", href: "/services#commercial" },
    { name: "Residential Engineering", href: "/services#residential" },
  ];

  const companyList = [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-charcoal-black border-t border-charcoal-muted mt-auto">
      {/* Top Footer Segment */}
      <div className="py-16 border-b border-charcoal-muted/30 animate-fade-in">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Column 1: Logo & Statement */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-charcoal-light border border-gold-accent/30">
                  <Hammer className="h-5 w-5 text-gold-accent" />
                </span>
                <span className="font-heading text-xl font-extrabold tracking-wider text-white">
                  GOD<span className="text-gold-accent">TECH</span>
                </span>
              </Link>
              <p className="text-neutral-400 font-sans text-sm leading-relaxed max-w-sm">
                Redefining elite engineering and luxury facility maintenance. We deliver absolute precision, uncompromising reliability, and bespoke support for high-profile residential and commercial systems.
              </p>
              {/* Contact Elements */}
              <div className="flex flex-col gap-3 mt-2 text-sm text-neutral-300">
                <a href="tel:+18005550199" className="flex items-center gap-3 hover:text-gold-accent transition-colors">
                  <Phone className="h-4 w-4 text-gold-accent flex-shrink-0" />
                  <span>+1 (800) GOD-TECH</span>
                </a>
                <a href="mailto:concierge@godtech.com" className="flex items-center gap-3 hover:text-gold-accent transition-colors">
                  <Mail className="h-4 w-4 text-gold-accent flex-shrink-0" />
                  <span>concierge@godtech.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold-accent flex-shrink-0" />
                  <span>Godtech Tower, Financial District, New York, NY 10005</span>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-l-2 border-gold-accent pl-3">
                Expertise
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {servicesList.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-neutral-400 hover:text-gold-accent transition-colors flex items-center gap-1 group">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-l-2 border-gold-accent pl-3">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {companyList.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-neutral-400 hover:text-gold-accent transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter Mock */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-white border-l-2 border-gold-accent pl-3">
                Newsletter
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Receive engineering audits, maintenance advisories, and insights.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 mt-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3.5 py-2 rounded-lg bg-charcoal-light border border-charcoal-muted text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-accent transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-gold-accent/10 hover:bg-gold-accent/20 border border-gold-accent/20 hover:border-gold-accent text-gold-accent text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer Segment */}
      <div className="py-8 bg-charcoal-black/50">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {currentYear} GODTECH Global LLC. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold-accent transition-colors">Licensing & Credentials</Link>
            <Link href="#" className="hover:text-gold-accent transition-colors">Global Standards</Link>
            <Link href="#" className="hover:text-gold-accent transition-colors">Cookie Policy</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
