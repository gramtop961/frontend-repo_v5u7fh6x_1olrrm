import React from 'react'

const tiers = [
  { name: 'Starter', price: '$0', desc: 'For exploration and personal projects', features: ['1K requests/day', 'Community support', 'Basic models'] },
  { name: 'Pro', price: '$39', desc: 'For teams shipping real products', features: ['100K requests/month', 'Priority support', 'Advanced models', 'Fine-tuning'] },
  { name: 'Enterprise', price: 'Let’s talk', desc: 'For mission-critical scale', features: ['Custom SLAs', 'On-prem / VPC', 'Dedicated support', 'Security reviews'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Flexible pricing</h2>
          <p className="mt-3 text-slate-300">Start free, scale when you’re ready.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{tier.name}</h3>
                <div className="text-sky-400 font-bold">{tier.price}</div>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{tier.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex items-center justify-center w-full rounded-lg bg-white/10 text-white py-2.5 border border-white/10 hover:bg-white/15 transition-colors">Choose {tier.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
