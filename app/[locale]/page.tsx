import Hero from "@/src/Components/Hero";
import About from "@/src/Components/About";
import Skills from "@/src/Components/Skills";
import Projects from "@/src/Components/Project";
import Educations from "@/src/Components/Educations";
import Contact from "@/src/Components/Contact";

export default function Page() {

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Educations />
      <Contact />
    </div>
  );
}
