import React from 'react'
import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(99,102,241,0.06),transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 shadow-[0_0_25px_rgba(56,189,248,0.3)]" />
              <span className="text-white font-semibold">Auralabs</span>
            </div>
            <p className="mt-3 text-slate-400 text-sm max-w-sm">AI tools that elevate creativity, automation, and performance.</p>
          </div>

          <div className="flex gap-10 text-sm">
            <div>
              <div className="text-white font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-slate-200">About</a></li>
                <li><a href="#features" className="hover:text-slate-200">Features</a></li>
                <li><a href="#pricing" className="hover:text-slate-200">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold">Contact</div>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li>hello@auralabs.ai</li>
                <li>+1 (555) 010-2025</li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold">Follow</div>
              <div className="mt-3 flex items-center gap-3 text-slate-300">
                <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
                <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Auralabs. All rights reserved.</div>
      </div>
    </footer>
  )
}
