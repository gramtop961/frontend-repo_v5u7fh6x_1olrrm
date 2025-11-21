import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import ProductPreview from './components/ProductPreview'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600 shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
              <span className="text-white font-semibold">Auralabs</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#" className="rounded-lg border border-white/10 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white">Sign In</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <About />
        <Features />
        <ProductPreview />
        <Pricing />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App
