import React from 'react'

const Radial = ({info}) => {
  return (
    <section className="overflow-hidden md:py-sp-100" id="getintouch">
        <div className="container">
        <h2 className="text-center uppercase font-bold mb-5">Get In Touch</h2>
        <p className='text-center mx-auto max-w-[450px]'>Feel free to reach out for collaboration or opportunities. I’d love to connect!</p>
        <div className="radial-anim relative md:px-6 max-w-[850px] sm:pt-[200px] mx-auto text-center bg-[radial-gradient(rgba(39,208,255,0.18)_20%,rgba(19,48,68,0.00)_67%)]">
        <div className="relative my-8 sm:my-0 sm:absolute btn-group-container w-full flex flex-col sm:flex-row gap-3 justify-between z-10 sm:top-20 left-0">
            <div className="w-full sm:w-48 flex flex-wrap sm:flex-col justify-center gap-3 sm:gap-0">
                <a href={`mailto:${info.email}`} className="btn-primary btn sm:mb-24 self-end sm:mr-[-40px]"> Email </a>
                <a href="https://account.microsoft.com/?username=mohan.thakur61" target="_blank" className="btn-primary btn" width={272} height={272}>Skype</a>
            </div>
            <div className="w-full sm:w-48 flex flex-wrap sm:flex-col justify-center gap-3 sm:gap-0">
                <a href="https://wa.me/+917771040630" target="_blank" className="btn-primary btn sm:mb-24 sm:translate-x-[-40px]">WhatsApp</a>
                <a href="tel:+91771040630" className="btn-primary btn self-end">Call us</a>
            </div>
        </div>
        <div className="circle-anim relative pt-3 w-[272px] h-[272px] mb-[-140px] md:mb-[-240px] mx-auto ">
            <div className="bg-circle absolute inset-0 rounded-full">
                <img src="/src/assets/Images/glowing-ball.png" width={272} height={272} alt="glowing" loading="lazy"/>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle "></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-800"></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-1600"></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-2400"></div>
            </div>
        </div>
        </div>
        </div>
        
    </section>
  )
}

export default Radial
