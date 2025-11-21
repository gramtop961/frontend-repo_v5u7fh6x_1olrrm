import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(60%_40%_at_80%_80%,rgba(147,51,234,0.2),transparent_60%),radial-gradient(50%_40%_at_20%_70%,rgba(14,165,233,0.2),transparent_60%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(transparent_23px,rgba(255,255,255,.08)_24px),linear-gradient(90deg,transparent_23px,rgba(255,255,255,.08)_24px)] bg-[size:24px_24px]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_24px_rgba(56,189,248,0.25)]"
          >
            The Future of Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 md:mt-6 text-lg md:text-xl text-slate-300"
          >
            AI tools that elevate creativity, automation, and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-3 font-semibold shadow-[0_0_0_0_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_8px_rgba(56,189,248,0.25)] transition-shadow"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 text-slate-200 px-6 py-3 font-semibold border border-white/10 hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
