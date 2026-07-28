"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer,
  ArrowLeft,
  User,
  Mail,
  Building,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ChevronRight,
  AlertCircle,
  Gem,
  Award
} from "lucide-react";

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [tier, setTier] = useState("estate");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic Validations
    if (!fullName || !email || !company || !password) {
      setError("All credentials and partnership details are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please provide a valid credentials email.");
      return;
    }

    if (password.length < 8) {
      setError("High-grade security passwords must be at least 8 characters.");
      return;
    }

    setIsLoading(true);

    // Simulate luxury onboarding handshakes
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/sign-in");
      }, 2500);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-charcoal-black flex flex-col justify-between relative overflow-hidden select-none">
      {/* Dynamic luxury background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1D_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1D_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-6 sm:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="p-2 rounded-lg bg-charcoal-light border border-gold-accent/30 group-hover:border-gold-bright transition-colors">
            <Hammer className="h-5 w-5 text-gold-accent group-hover:text-gold-bright transition-colors" />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-wider text-white">
            GOD<span className="text-gold-accent">TECH</span>
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs font-heading font-bold uppercase tracking-widest text-neutral-400 hover:text-white flex items-center gap-2 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 text-gold-accent group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Content Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-charcoal/90 backdrop-blur-md border border-charcoal-muted rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/50 relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent" />

                <div className="text-center mb-8">
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-gold-accent bg-gold-accent/5 px-3 py-1 rounded-full border border-gold-accent/10">
                    Partnership Request
                  </span>
                  <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4">
                    Register Client Node
                  </h1>
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2">
                    Initialize your custom engineering profiling setup for premier priority dispatch.
                  </p>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-xs flex items-center gap-3"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-300 mb-2">
                        Partner Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-neutral-500" />
                        </div>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Alistair Vance"
                          disabled={isLoading}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-charcoal-black border border-charcoal-muted text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-all duration-300 font-sans"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-300 mb-2">
                        Advisory Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-neutral-500" />
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="vance@obsidianplaza.com"
                          disabled={isLoading}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-charcoal-black border border-charcoal-muted text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-all duration-300 font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label className="block font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-300 mb-2">
                        Company Name / Estate
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building className="h-4 w-4 text-neutral-500" />
                        </div>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Obsidian Plaza LLC"
                          disabled={isLoading}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-charcoal-black border border-charcoal-muted text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-all duration-300 font-sans"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-300 mb-2">
                        High-Grade Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock className="h-4 w-4 text-neutral-500" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          disabled={isLoading}
                          className="w-full pl-11 pr-12 py-3 rounded-xl bg-charcoal-black border border-charcoal-muted text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-all duration-300 font-sans"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-500 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tier / Priority Plan Selection */}
                  <div>
                    <label className="block font-heading text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-300 mb-3">
                      Required Service Tier & Protection Plan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Luxury Private Estate Tier */}
                      <label
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          tier === "estate"
                            ? "border-gold-accent bg-gold-accent/5"
                            : "border-charcoal-muted bg-charcoal-black/50 hover:border-gold-accent/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="tier"
                          value="estate"
                          checked={tier === "estate"}
                          onChange={() => setTier("estate")}
                          className="sr-only"
                        />
                        <Gem className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier === "estate" ? "text-gold-bright" : "text-neutral-500"}`} />
                        <div>
                          <span className="block font-heading text-xs font-bold text-white uppercase tracking-wider">Luxury Estate Care</span>
                          <span className="block text-[10px] text-neutral-400 mt-0.5 leading-tight">For high-profile mansions, superyachts, and smart automated HVAC/power control systems.</span>
                        </div>
                      </label>

                      {/* Commercial Tower Tier */}
                      <label
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          tier === "commercial"
                            ? "border-gold-accent bg-gold-accent/5"
                            : "border-charcoal-muted bg-charcoal-black/50 hover:border-gold-accent/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="tier"
                          value="commercial"
                          checked={tier === "commercial"}
                          onChange={() => setTier("commercial")}
                          className="sr-only"
                        />
                        <Award className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier === "commercial" ? "text-gold-bright" : "text-neutral-500"}`} />
                        <div>
                          <span className="block font-heading text-xs font-bold text-white uppercase tracking-wider">Industrial & Corporate</span>
                          <span className="block text-[10px] text-neutral-400 mt-0.5 leading-tight">Critical backup generators, high-voltage switchgears, and automated heavy pump facilities.</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-accent to-gold-dark hover:from-gold-bright hover:to-gold-accent text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-neutral-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting Secure Profile...</span>
                      </span>
                    ) : (
                      <>
                        <span>Request Partnership Access</span>
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-5 border-t border-charcoal-muted/50 text-center">
                  <p className="text-xs text-neutral-400">
                    Already possess custom credentials?{" "}
                    <Link
                      href="/sign-in"
                      className="text-gold-accent hover:text-gold-bright font-semibold transition-colors"
                    >
                      Access Portal
                    </Link>
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-charcoal border border-gold-accent/30 rounded-3xl p-10 shadow-2xl text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent animate-pulse" />
                <div className="h-16 w-16 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-gold-accent animate-bounce" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-white mb-2">Request Transmitted</h2>
                <span className="font-heading text-[10px] tracking-widest uppercase text-gold-accent bg-gold-accent/5 px-2.5 py-1 rounded inline-block mb-4">
                  Pending Executive Board Approval
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
                  Your partnership request and security credentials have been stored. An executive concierge will call or email your node to authenticate and approve access shortly. Directing you to key validation...
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-gold-accent animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 rounded-full bg-gold-accent animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 rounded-full bg-gold-accent animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 py-6 text-center text-[10px] text-neutral-600 tracking-wider">
        &copy; {new Date().getFullYear()} GODTECH GLOBAL LLC. CONFIDENTIAL SYSTEM PRESERVING MULTI-GRID INFRASTRUCTURE.
      </footer>
    </div>
  );
}
