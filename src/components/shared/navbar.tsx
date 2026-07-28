"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal-black/95 backdrop-blur-md border-b border-charcoal-muted shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="p-2 rounded-lg bg-charcoal-light border border-gold-accent/30 group-hover:border-gold-bright transition-colors">
              <Hammer className="h-5 w-5 text-gold-accent group-hover:text-gold-bright transition-colors" />
            </span>
            <span className="font-heading text-xl font-extrabold tracking-wider text-white">
              GOD<span className="text-gold-accent">TECH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading text-sm font-semibold tracking-wider transition-all relative py-1 ${
                    isActive
                      ? "text-gold-accent"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-gold-accent hover:bg-gold-bright text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/20 hover:-translate-y-0.5"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-charcoal-black border-b border-charcoal-muted absolute top-full left-0 right-0 overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-base font-semibold tracking-wide py-2 border-b border-neutral-900/50 block ${
                      isActive ? "text-gold-accent" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-xl bg-gold-accent hover:bg-gold-bright text-neutral-950 font-heading text-sm font-bold tracking-widest uppercase transition-colors"
              >
                Get Consultation
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
