import React from 'react'
import profile from '../assets/Images/mohan.jpg';

const Hero = ({info}) => {
  return (
    <section className="mainHero min-h-screen w-full flex flex-col items-center justify-center sec-space" id="homeSection">
      <div className="container !max-w-[900px] relative z-10 ">
          <div className='w-full flex flex-col justify-center items-center'>
                <div className='main-profile w-full text-center mb-8'>
                  <div className="profile-img mb-0 mx-auto w-[150px] h-[150px] relative overflow-hidden border-8 rounded-full bg-primary-900 border-secondary-light">
                      <img src={profile} alt="Mohan Thakur" width={644} height={996}/> 
                  </div>
                </div>
                <h1 className="leading-tight text-center font-bold mb-5">👋 Hello I'm <span className="text-primary inline-block">{info.name}</span> I'm a <br className='hidden md:block'/> <span className='inline-block'>{info.designation}</span></h1>
                <p className="mb-8 text-center">{info.brif}</p>
                <div className='btnGroup flex flex-wrap gap-4 justify-center'>
                  <button className='btn-primary btn w-full sm:w-auto'>Connect with me!</button>
                  <button className='btn-primary btn w-full sm:w-auto'>Download</button>
                </div>
            </div>
      </div>
      
    </section>
  )
}

export default Hero
