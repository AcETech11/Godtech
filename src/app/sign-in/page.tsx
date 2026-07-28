"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ChevronRight,
  AlertCircle
} from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic Validation
    if (!email || !password) {
      setError("Please fill in all security fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid credentials address.");
      return;
    }

    if (password.length < 6) {
      setError("Security credentials must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    // Simulate luxury authentication handshake
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      // Redirect to home or simulated dashboard after transition
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }, 1500);
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
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="signin-form"
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
                    Secure Access Portal
                  </span>
                  <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4">
                    Authorized Sign-In
                  </h1>
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2">
                    Enter your certified Godtech credentials to access your control dashboard.
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-widest text-neutral-300 mb-2">
                      Registered Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-neutral-500" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. administrator@godtech.com"
                        disabled={isLoading}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-charcoal-black border border-charcoal-muted text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-all duration-300 font-sans"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block font-heading text-xs font-bold uppercase tracking-widest text-neutral-300">
                        Secure Password
                      </label>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setError("Please contact your designated system administrator for recovery options.");
                        }}
                        className="text-[10px] font-heading font-semibold text-gold-accent hover:text-white uppercase tracking-wider transition-colors"
                      >
                        Reset Credentials?
                      </a>
                    </div>
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
                        className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-charcoal-black border border-charcoal-muted text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-gold-accent transition-all duration-300 font-sans"
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-accent to-gold-dark hover:from-gold-bright hover:to-gold-accent text-neutral-950 font-heading text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-accent/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-neutral-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Verifying Security Matrix...</span>
                      </span>
                    ) : (
                      <>
                        <span>Verify Identity</span>
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-charcoal-muted/50 text-center">
                  <p className="text-xs text-neutral-400">
                    Need elite maintenance access?{" "}
                    <Link
                      href="/sign-up"
                      className="text-gold-accent hover:text-gold-bright font-semibold transition-colors"
                    >
                      Request Partner Account
                    </Link>
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signin-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-charcoal border border-gold-accent/30 rounded-3xl p-10 shadow-2xl text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent animate-pulse" />
                <div className="h-16 w-16 rounded-full bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-gold-accent animate-bounce" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-white mb-2">Access Granted</h2>
                <span className="font-heading text-[10px] tracking-widest uppercase text-gold-accent bg-gold-accent/5 px-2.5 py-1 rounded inline-block mb-4">
                  Security Clearing: Level 1
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
                  Your identity has been authenticated successfully. Directing you to the premium console...
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
