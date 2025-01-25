
import BioItem from '../components/BioItem';
import { easeIn, motion } from 'framer-motion';
import Paragraph from '../components/Paragraph';
import profile from '../assets/Images/mohan.jpg';

let brief3 = "I am a frontend developer specializing in building responsive, user-friendly web applications using modern frameworks like React.js and Next.js. With a strong focus on design and functionality, I bring creative ideas to life and am eager to contribute to innovative projects. Currently available for a full-time position."

const About = ({info}) => {
  return (
    <section className="aboutUs py-sp-50 md:py-sp-100" id="about">
        <div className="container xl:!max-w-[1200px] flex flex-col md:flex-row md:flex-wrap gap-6 lg:gap-10 xl:gap-20">
            <div className='head  text-center'>
              <Paragraph value={brief3} cls={"text-h6 md:text-[33px] font-montserrat font-normal flex flex-wrap"} />
            </div>
            <div className="w-[360px] max-w-full">
              <div className='bg-secondary p-4 rounded-lg'>
                <img src={profile} alt={info.name} width={450} height={492} loading="lazy"/>
              </div>
            </div>
            <div className="md:flex-1 md:self-center">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-12'>
              <BioItem keyName={"Name"} title={info.name} />
              <BioItem keyName={"Designation"} title={info.designation} />
              <BioItem keyName={"Email"} title={info.email} url={`mailto:${info.email}`} />
              <BioItem keyName={"Skype"} title={info.skype} />
              <BioItem keyName={"Linkdin"} title={info.linkdin} url={`https://www.linkedin.com/in/${info.linkdin}`}/>
              <BioItem keyName={"Address"} title={info.address} />
              </ul>
              <ul className='flex flex-wrap gap-3 md:gap-4'>
                {info.tool.map((item, index)=>(
                     <li key={index} className="w-12 md:w-16 p-2 md:p-3 rounded-md  aspect-[1/1] inline-flex flex-col items-center justify-center bg-secondary"> <img alt={item.title} className="w-full min-w-10 h-full max-h-full opacity-90" src={item.icon} loading="lazy" /></li>
                ))}
              </ul>
            </div>
        </div>
        
    </section>
  )
}

export default About
