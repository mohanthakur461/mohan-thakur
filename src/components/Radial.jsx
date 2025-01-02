import React from 'react'

const Radial = ({info}) => {
  return (
    <section className="overflow-hidden pt-sp-70">
        <div className="radial-anim relative max-w-[900px] pt-[200px] mx-auto text-center bg-[radial-gradient(rgba(39,208,255,0.18)_20%,rgba(19,48,68,0.00)_67%)]">
        <div className="absolute btn-group-container w-full flex justify-between z-10 top-20">
            <div className="w-48 flex flex-col">
                <a href={`mailto:${info.email}`} className="btn-primary btn mb-24 self-end mr-[-40px]"> Email </a>
                <a href="https://account.microsoft.com/?username=mohan.thakur61" target="_blank" className="btn-primary btn" width={272} height={272}>Skype</a>
            </div>
            <div className="w-48 flex flex-col">
                <a href="https://wa.me/+917771040630" target="_blank" className="btn-primary btn mb-24 translate-x=[-40px]">WhatsApp</a>
                <a href="tel:+91771040630" className="btn-primary btn self-end">Call us</a>
            </div>
        </div>
        <div className="circle-anim relative pt-3 w-[272px] h-[272px] mb-[-140px] mx-auto">
            <div className="bg-circle absolute inset-0 rounded-full">
                <img src="/src/assets/Images/glowing-ball.png" alt="glowing"/>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle "></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-800"></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-1600"></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-2400"></div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Radial
