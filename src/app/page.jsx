import { About } from '@/components/About'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/ProjectsPreviews'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
    </>
  )
}
