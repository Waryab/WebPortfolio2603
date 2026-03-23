import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero";

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Navigation />
        <main className="pl-12 md:pl-20 min-h-screen relative">
          <Hero />
        </main>
      </div>
    </>
  )
}

export default App
