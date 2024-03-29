import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Background/>
      <Contact/>
    </main>
  )
}
