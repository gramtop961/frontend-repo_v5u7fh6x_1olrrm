import React from 'react'
import { Brain, Zap, ShieldCheck } from 'lucide-react'

export default function About() {
  const items = [
    { icon: Brain, title: 'Innovation', desc: 'Research-driven models to unlock new creative and operational capabilities.' },
    { icon: Zap, title: 'Speed', desc: 'Low-latency inference and optimized pipelines for real-time experiences.' },
    { icon: ShieldCheck, title: 'Reliability', desc: 'Enterprise-grade uptime, security, and compliance out of the box.' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Who we are</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            We build high-performance AI systems that help teams move faster. From automation to
            creative assistance, our platform delivers clarity, control, and measurable results.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/7 transition-colors">
              <Icon className="w-6 h-6 text-sky-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
