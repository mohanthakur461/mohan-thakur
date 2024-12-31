import Technology from "./components/Technology"
import Marquee from "./components/Marquee"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Work from "./sections/Work"
import data from './assets/sampleOut.json'
import Radial from "./components/Radial"

const info = data.personalInfo[0];

function App() {
  return (
    <>
     <Header/>
     <Hero info={info}/>
      <section className="w-[calc(100%+30px)] rotate-[-5deg] translate-y-[-50px] relative flex bg-gradient-to-r from-secondary  to-secondary-dark border-t border-b border-white-80 mt-20">
          <Marquee info={info.skill}/>
          <Marquee info={info.skill}/>
      </section>
      
      <About info={info}/>
      <Projects/>
      <Work info={info.work} />
      <section className="brands py-8 space-y-1 md:space-y-3">
          <div className="whitespace-nowrap overflow-x-hidden space-x-1 md:space-x-3 relative">
            <Technology info={info.skill} />
            <Technology info={info.skill}/>
          </div>
          <div className="whitespace-nowrap overflow-x-hidden space-x-1 md:space-x-3 relative">
            <Technology info={info.skill} marquee={"animate-marquee2"} />
            <Technology info={info.skill} marquee={"animate-marquee2"} />
          </div>
        </section>
        <Radial info={info}/>
       <Footer info={info.social}/>
     
     
    </>
  )
}

export default App
