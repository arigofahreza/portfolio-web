import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}