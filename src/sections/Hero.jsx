import React from 'react'
import profile from '../assets/Images/mohan.jpg';

const Hero = () => {
  return (
    <section className="mainHero w-full flex flex-col items-center justify-center sec-space" id="homeSection">
      <div className="container relative z-10 ">
          <div className='w-full flex flex-col justify-center items-center'>
                <div className='main-profile w-full text-center mb-8'>
                  <div className="profile-img mb-0 mx-auto w-[150px] h-[150px] relative overflow-hidden border-8 rounded-full bg-primary-900 border-primary">
                      <img src={profile} alt="Mohan Thakur" width={644} height={996}/> 
                  </div>
                </div>
                <h1 className="leading-tight text-center font-bold mb-5">👋 Hello I'm <span className="text-primary-400 inline-block">Mohan Thakur</span> I'm a <br className='hidden md:block'/> <span className='inline-block'>Front-end Developer</span></h1>
                <p className="mb-8 text-center">I specilize in building modern and responsive web applications.</p>
                <div className='btnGroup flex flex-wrap gap-4 justify-center'>
                  <button className='btn-primary btn'>Connect with me!</button>
                  <button className='btn-primary btn'>Download</button>
                </div>
            </div>
            {/* <div className='mx-auto max-w-screen-lg bg-yellow-300 bg-cover w-full aspect-[16/7] overflow-hidden relative'>
                <img className="w-full h-full object-cover object-top absolute top-0 " src={profile} alt="Mohan Thakur" width={644} height={996}/> 
            </div> */}
        {/* <div className='main-profile w-full text-center py-20'>
            <div className="profile-img mb-[30px] mx-auto w-[180px] md:w-[230px] h-[180px] md:h-[230px] relative overflow-hidden border-[10px] md:border-[12px] rounded-full bg-primary-900 border-[#9290C3]">
                <img src={profile} alt="Mohan Thakur" width={644} height={996}/> 
            </div>
            <div className="mb-3 text-h5">Hi, I am</div>
            <h1 className="uppercase tracking-wide mb-2 leading-none">Mohan Thakur</h1>
            <h2 className="lg:text-h4 text-h5 font-anton uppercase tracking-wide">Fronted Developer</h2>
            <div className='flex mt-5 gap-4 justify-center items-center'>
              <button className='btn-primary btn'>Download</button>
              <button className='btn-primary btn'>Contact</button>
            </div>
            
        </div> */}
      </div>
      
    </section>
  )
}

export default Hero
