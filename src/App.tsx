import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Navigation />
        
        <main className="ml-12 md:mx-20 min-h-screen relative">
          <Hero />
          <Experience />
          <Education />
        </main>

        <div className="hidden xl:block fixed right-0 top-0 h-full w-20 border-l border-white/10 z-40 mix-blend-difference">
          <div className="h-full flex flex-col items-center justify-center gap-12 text-white">
            <span className="[writing-mode:vertical-rl] mono text-xs uppercase tracking-[0.5em] opacity-40">Software Engineer</span>
            <div className="w-px h-32 bg-white/20" />
            <span className="[writing-mode:vertical-rl] mono text-xs uppercase tracking-[0.5em] opacity-40">Full Stack Developer</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
