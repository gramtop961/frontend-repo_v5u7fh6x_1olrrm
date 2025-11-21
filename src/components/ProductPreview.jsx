import React from 'react'
import { motion } from 'framer-motion'

export default function ProductPreview() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.1),transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Designed for efficiency and performance</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">A focused interface that makes complex AI workflows feel effortless.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-3 backdrop-blur-xl shadow-2xl shadow-sky-900/20">
            <div className="aspect-[16/9] w-full rounded-xl bg-slate-900/80 border border-white/10 overflow-hidden">
              {/* Faux UI mockup */}
              <div className="h-12 flex items-center gap-2 px-4 border-b border-white/10 bg-slate-900/60">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <div className="ml-4 text-slate-300 text-sm">/workspace/ai-project</div>
              </div>
              <div className="grid grid-cols-12 h-[calc(100%-3rem)]">
                <div className="col-span-3 border-r border-white/10 p-4 space-y-2">
                  {['overview','datasets','agents','analytics','deploy'].map((i) => (
                    <div key={i} className="h-8 rounded-md bg-white/5 border border-white/10" />
                  ))}
                </div>
                <div className="col-span-9 p-4 space-y-3">
                  <div className="h-10 rounded-md bg-white/5 border border-white/10" />
                  <div className="h-48 rounded-md bg-white/5 border border-white/10" />
                  <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className="h-24 rounded-md bg-white/5 border border-white/10" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
