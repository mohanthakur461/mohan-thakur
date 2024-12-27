
import profile from '../assets/Images/mohan.jpg';
import BioItem from '../components/BioItem';
import { motion } from 'framer-motion';
import Paragraph from '../components/Paragraph';

const tools = ["/tools/vscode.svg", "/tools/photoshop.svg", "/tools/xd.svg", "/tools/figma.svg", "/tools/illustrator.svg"]

const text =  "I'm a French digital designer and web developer with over 10 years of experience. At the crossroads of design, motion and web development, the diversity of my skills allows me to approach design challenges from multiple perspectives. I'm currently available for a full-time position.";

const About = () => {
  return (
    <section className="aboutUs py-sp-100" id="aboutSection">
        <div className="container !max-w-screen-xl flex flex-col md:flex-row md:flex-wrap gap-20">
            <div className='head  text-center'>
              <motion.h2 className='uppercase mb-8 font-bold'  initial={{ opacity: 0, transform: "translateY(30px)" }}
  whileInView={{ opacity: 1,  transform: "translateY(0px)" }}>About</motion.h2>
              <Paragraph value={text} cls={"text-h3 font-montserrat font-normal flex flex-wrap"} />
            </div>
            {/* <h2 className="w-full text-white font-anton">About</h2> */}
            <div className="w-[400px] max-w-full">
              <div className='bg-white-90 p-6 rounded-lg'>
                <img src={profile} alt="Mohan Thakur" width={644} height={996} loading="lazy"/>
              </div>
            </div>
            <div className="flex-1 self-center">
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              <BioItem keyName={"Name"} title={"Mohan Thakur"} />
              {/* <BioItem keyName={"Company"} title={data.company} /> */}
              <BioItem keyName={"Designation"} title={"Frontend Devloper"} />
              <BioItem keyName={"Email"} title={"designermt8@gmail.com"} url={`mailto:designermt8@gmail.com}`} />
              {/* <BioItem keyName={"Birthday"} title={"09 December"} /> */}
              <BioItem keyName={"Skype"} title={"mohan.thakur61"} />
              <BioItem keyName={"Linkdin"} title={"mohanlal-thakur-42b686121"} url={`https://www.linkedin.com/in/mohanlal-thakur-42b686121`}/>
              <BioItem keyName={"Address"} title={"Ahmedabad, India"} />
              </ul>
              <ul className='flex flex-wrap gap-4'>
                {tools.map((item, index)=>(
                     <li key={index} className="w-16 p-3 rounded-md  aspect-[1/1] inline-flex flex-col items-center justify-center bg-primary-200"> <img alt="Client 1" className="w-full min-w-10 h-full max-h-full opacity-90" src={item} loading="lazy" /></li>
                ))}
              </ul>
            </div>
        </div>
    </section>
  )
}

export default About
