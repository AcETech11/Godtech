"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck, Clock, Send } from "lucide-react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Container from "@/components/shared/container";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    sector: "Private Estate",
    service: "Generator Maintenance",
    urgency: "Preventative Auditing",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [intakeId, setIntakeId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an ultra-luxury mock dispatch response transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIntakeId(Math.floor(100000 + Math.random() * 900000));
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-24 overflow-hidden">
        {/* HEADER */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-charcoal-black via-charcoal to-charcoal-black border-b border-charcoal-muted">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1D_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1D_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <Container className="relative z-10 text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent px-3 py-1 bg-gold-accent/5 border border-gold-accent/20 rounded-full inline-block mb-6">
              Initiate Contact
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-8">
              Connect with the <span className="text-gold-accent">Concierge</span>.
            </h1>
            <p className="font-sans text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Whether you require immediate emergency dispatch or would like to schedule a complete preventive systems audit, our expert team is standing by.
            </p>
          </Container>
        </section>

        {/* TWO COLUMN CONTACT FORM & DETAILS */}
        <section className="py-24 bg-charcoal">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left Column: Details & SLAs */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent">
                    Global Office
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-3 mb-6">
                    Godtech headquarters
                  </h2>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Centrally located in Manhattan&apos;s Financial District, we maintain active teams ready to mobilize internationally.
                  </p>
                </div>

                {/* Direct Contact Items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal-black border border-charcoal-muted">
                    <div className="p-3 rounded-xl bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center flex-shrink-0 text-gold-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white mb-1">Office Location</h4>
                      <p className="text-sm text-neutral-300">Godtech Tower, Financial District</p>
                      <p className="text-xs text-neutral-500">New York, NY 10005</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal-black border border-charcoal-muted">
                    <div className="p-3 rounded-xl bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center flex-shrink-0 text-gold-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white mb-1">Direct Lines</h4>
                      <p className="text-sm text-neutral-300 hover:text-gold-accent transition-colors">
                        <a href="tel:+18005550199">+1 (800) GOD-TECH</a>
                      </p>
                      <p className="text-xs text-neutral-500">International: +1 (212) 555-0199</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal-black border border-charcoal-muted">
                    <div className="p-3 rounded-xl bg-gold-accent/5 border border-gold-accent/20 flex items-center justify-center flex-shrink-0 text-gold-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white mb-1">Electronic Support</h4>
                      <p className="text-sm text-neutral-300 hover:text-gold-accent transition-colors">
                        <a href="mailto:concierge@godtech.com">concierge@godtech.com</a>
                      </p>
                      <p className="text-xs text-neutral-500">General Inquiries: hello@godtech.com</p>
                    </div>
                  </div>
                </div>

                {/* Response SLA Promise */}
                <div className="p-6 rounded-2xl bg-gold-accent/5 border border-gold-accent/25 space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold-accent" />
                    <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">Our Dispatch SLA</h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Contract clients receive an active 12-minute dispatch guarantee. Public audit submissions are categorized immediately, with a guaranteed call-back within 30 minutes from our senior on-duty technician.
                  </p>
                </div>
              </div>

              {/* Right Column: Premium Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-8 md:p-10 rounded-3xl bg-charcoal-black border border-charcoal-muted shadow-2xl relative">

                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="font-heading text-xl font-bold text-white mb-1">Systems Audit Intake</h3>
                          <p className="text-xs text-neutral-400">Complete the telemetry routing to initialize contact.</p>
                        </div>

                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="fullName" className="font-heading text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Sterling Hunt"
                            className="px-4 py-3.5 rounded-xl bg-charcoal border border-charcoal-muted text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-colors w-full"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="font-heading text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                            Corporate / Estate Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="e.g. s.hunt@huntcorporation.com"
                            className="px-4 py-3.5 rounded-xl bg-charcoal border border-charcoal-muted text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-colors w-full"
                          />
                        </div>

                        {/* Sector, Service & Urgency Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                          {/* Sector Select */}
                          <div className="flex flex-col gap-2 relative">
                            <label htmlFor="sector" className="font-heading text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                              Target Sector
                            </label>
                            <select
                              id="sector"
                              name="sector"
                              value={formData.sector}
                              onChange={handleChange}
                              className="appearance-none px-4 py-3.5 rounded-xl bg-charcoal border border-charcoal-muted text-sm text-white focus:outline-none focus:border-gold-accent transition-colors w-full cursor-pointer"
                            >
                              <option value="Private Estate">Private Estate</option>
                              <option value="Commercial Asset">Commercial Asset</option>
                              <option value="Industrial Center">Industrial Center</option>
                              <option value="Marine/Yacht">Marine/Yacht</option>
                              <option value="Other">Other Category</option>
                            </select>
                          </div>

                          {/* Service Select */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="service" className="font-heading text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                              Primary Capability
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="appearance-none px-4 py-3.5 rounded-xl bg-charcoal border border-charcoal-muted text-sm text-white focus:outline-none focus:border-gold-accent transition-colors w-full cursor-pointer"
                            >
                              <option value="Generator Maintenance">Generator Maintenance</option>
                              <option value="Electrical Systems">Electrical Systems</option>
                              <option value="Water Pumps">Water Pumps & Fluids</option>
                              <option value="Building Envelope">Building Envelope Care</option>
                              <option value="Special Engineering">Special Engineering</option>
                              <option value="General Inquiry">General Inquiry</option>
                            </select>
                          </div>
                        </div>

                        {/* Urgency select */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="urgency" className="font-heading text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                            Emergency Priority Status
                          </label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className="appearance-none px-4 py-3.5 rounded-xl bg-charcoal border border-charcoal-muted text-sm text-white focus:outline-none focus:border-gold-accent transition-colors w-full cursor-pointer"
                          >
                            <option value="Preventative Auditing">Preventative Auditing & Consulting</option>
                            <option value="System Retrofitting">System Upgrade & Retrofit</option>
                            <option value="Active Incident">Active Incident / Non-Critical</option>
                            <option value="CRITICAL CRISIS">CRITICAL CRISIS / IMMEDIATE RESPONSE</option>
                          </select>
                        </div>

                        {/* Description Scope */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="description" className="font-heading text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                            Asset Configuration Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            required
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Detail your system configuration, backup capacity, and specific maintenance or structural symptoms..."
                            className="px-4 py-3.5 rounded-xl bg-charcoal border border-charcoal-muted text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-colors w-full resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-accent to-gold-dark hover:from-gold-bright hover:to-gold-accent text-neutral-950 font-heading text-xs font-extrabold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-accent/10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="h-4 w-4 rounded-full border-2 border-neutral-950 border-t-transparent animate-spin" />
                              <span>Authenticating Dispatch Routing...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-3.5 w-3.5" />
                              <span>Establish Security Link</span>
                            </>
                          )}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                      >
                        <div className="h-16 w-16 rounded-full bg-gold-accent/10 border-2 border-gold-accent flex items-center justify-center text-gold-accent">
                          <ShieldCheck className="h-8 w-8 animate-bounce" />
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-heading text-2xl font-extrabold text-white">Security Link Established</h3>
                          <p className="font-heading text-xs font-bold uppercase tracking-wider text-gold-accent">
                            Intake Logged: ID #{intakeId}
                          </p>
                        </div>

                        <div className="p-5 rounded-xl bg-charcoal border border-charcoal-muted max-w-md text-xs text-neutral-300 leading-relaxed">
                          <p className="font-semibold text-white mb-2">Priority Routing Activated</p>
                          <p className="mb-4">
                            Your configuration parameters have been encrypted and routed directly to our on-duty Senior Mechanical and Electrical Engineering Council.
                          </p>
                          <p className="text-neutral-500 font-mono">
                            Assigned Concierge Officer response window: <span className="text-gold-accent font-bold">12 Minutes</span>
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setIntakeId(null);
                            setFormData({
                              fullName: "",
                              email: "",
                              sector: "Private Estate",
                              service: "Generator Maintenance",
                              urgency: "Preventative Auditing",
                              description: ""
                            });
                          }}
                          className="px-6 py-2.5 rounded-full border border-gold-accent/20 hover:border-gold-accent/60 text-xs font-heading font-bold uppercase tracking-widest text-gold-accent hover:text-white transition-all cursor-pointer"
                        >
                          Submit Another Audit
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

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
