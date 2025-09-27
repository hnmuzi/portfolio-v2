import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import AllProjects from "./components/AllProjects"
import AllCertificates from "./components/AllCertificates"
import ScrollToTop from "./components/ScrollToTop"
import Reveal from "./components/Reveal"   // ✅ tambahkan ini

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[url('/bg-hero.svg')] bg-cover bg-center min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <Reveal>
                  <About />
                </Reveal>

                <Reveal>
                  <Projects />
                </Reveal>

                <Reveal>
                  <Certificates />
                </Reveal>

                <Reveal>
                  <Contact />
                </Reveal>
              </>
            }
          />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/all-certificates" element={<AllCertificates />} />
        </Routes>
      </div>
    </Router>
  )
}
