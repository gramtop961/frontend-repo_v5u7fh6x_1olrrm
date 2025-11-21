import React from 'react'
import { Bot, Sparkles, BarChart3, Wand2 } from 'lucide-react'

const features = [
  {
    title: 'AI Automation',
    desc: 'Automate workflows with orchestrated agents that learn and adapt.',
    icon: Bot,
  },
  {
    title: 'Intelligent Assistant',
    desc: 'Context-aware copilots across your tools to boost productivity.',
    icon: Sparkles,
  },
  {
    title: 'Real-time Analytics',
    desc: 'Streaming insight pipelines with dashboards and anomaly alerts.',
    icon: BarChart3,
  },
  {
    title: 'Creative Generation Tools',
    desc: 'Text, image, and audio generation with fine control and style presets.',
    icon: Wand2,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(147,51,234,0.1),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Built for impact</h2>
          <p className="mt-3 text-slate-300">Everything you need to deploy powerful AI in days, not months.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/0 via-sky-500/20 to-indigo-600/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
              <div className="relative">
                <Icon className="w-6 h-6 text-sky-400" />
                <h3 className="mt-4 text-white font-semibold">{title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
