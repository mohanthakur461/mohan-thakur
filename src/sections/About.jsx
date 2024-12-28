
import BioItem from '../components/BioItem';
import { motion } from 'framer-motion';
import Paragraph from '../components/Paragraph';
import dataAbout from '../assets/sampleOut.json'

const tools = ["/tools/vscode.svg", "/tools/photoshop.svg", "/tools/xd.svg", "/tools/figma.svg", "/tools/illustrator.svg"]

const About = ({info}) => {
  return (
    <section className="aboutUs py-sp-50 md:py-sp-100" id="aboutSection">
        <div className="container xl:!max-w-screen-xl flex flex-col md:flex-row md:flex-wrap gap-6 lg:gap-10 xl:gap-20">
            <div className='head  text-center'>
              <motion.h2 className='uppercase mb-8 font-bold'  initial={{ opacity: 0, transform: "translateY(30px)"}}
  whileInView={{ opacity: 1,  transform: "translateY(0px)" }}>About</motion.h2>
              <Paragraph value={info.fbrif} cls={"text-h6 md:text-[36px] font-montserrat font-normal flex flex-wrap justify-center"} />
            </div>
            {/* <h2 className="w-full text-white font-anton">About</h2> */}
            <div className="w-[360px] max-w-full">
              <div className='bg-secondary-light p-4 rounded-lg'>
                <img src={info.profile} alt={info.name} width={644} height={996} loading="lazy"/>
              </div>
            </div>
            <div className="md:flex-1 md:self-center">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-12'>
              <BioItem keyName={"Name"} title={info.name} />
              <BioItem keyName={"Designation"} title={info.designation} />
              <BioItem keyName={"Email"} title={info.email} url={`mailto:${info.email}`} />
              <BioItem keyName={"Skype"} title={info.skype} />
              <BioItem keyName={"Linkdin"} title={info.linkdin} url={`https://www.linkedin.com/in/${info.linkdin}`}/>
              <BioItem keyName={"Address"} title={info.address} />
              </ul>
              <ul className='flex flex-wrap gap-3 md:gap-4'>
                {tools.map((item, index)=>(
                     <li key={index} className="w-12 md:w-16 p-2 md:p-3 rounded-md  aspect-[1/1] inline-flex flex-col items-center justify-center bg-secondary-light"> <img alt="Client 1" className="w-full min-w-10 h-full max-h-full opacity-90" src={item} loading="lazy" /></li>
                ))}
              </ul>
            </div>
        </div>
        
    </section>
  )
}

export default About
