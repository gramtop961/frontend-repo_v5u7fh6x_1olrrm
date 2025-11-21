import React from 'react'

const testimonials = [
  {
    quote: 'We shipped in weeks, not months. Their stack is the real deal.',
    author: 'Ava Reynolds',
    role: 'Head of Product, Nova Labs',
  },
  {
    quote: 'The assistant feels like a teammate. Productivity is up 40%.',
    author: 'Daniel Kim',
    role: 'CTO, Orbit AI',
  },
  {
    quote: 'Beautiful, reliable, and fast. Exactly what we needed.',
    author: 'Maya Patel',
    role: 'Founder, Synth Studio',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">What customers say</h2>
          <p className="mt-3 text-slate-300">Loved by teams building the next generation of products.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.author} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
