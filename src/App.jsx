import Technology from "./components/Technology"
import Marquee from "./components/Marquee"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Work from "./sections/Work"


function App() {
  return (
    <>
     <Header/>
     <Hero/>
      <section className="relative flex overflow-x-hidden bg-white-90 border-t border-b border-white-85 mt-5">
          <Marquee/>
          <Marquee/>
          <Marquee/>
      </section>
      
     <About/>
     <Projects/>
     <section className="brands py-10 space-y-5 ">
        <div className="whitespace-nowrap overflow-x-hidden space-x-5 relative">
          <Technology />
          <Technology/>
        </div>
        <div className="whitespace-nowrap overflow-x-hidden space-x-5 relative">
          <Technology marquee={"animate-marquee2"} />
          <Technology marquee={"animate-marquee2"} />
        </div>
      </section>
      <Work/>
     <Footer/>
     
     
    </>
  )
}

export default App
