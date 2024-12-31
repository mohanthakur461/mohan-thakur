import React from 'react'

const Radial = ({info}) => {
  return (
    <section className="radial-anim active max-w-[900px] pt-[230px] mx-auto text-center bg-[radial-gradient(rgba(39,208,255,0.18)_20%,rgba(19,48,68,0.00)_67%)] overflow-hidden">
        <div className="absolute btn-group-container container ">
            <div className="left-column column">
                <a href={`mailto:${info.email}`} className="btn btn-primary"> Email </a>
                <a href="https://account.microsoft.com/?username=mohan.thakur61" target="_blank" className="btn btn-primary ">Skype</a>
            </div>
            <div className="right-column column">
                <a href="https://wa.me/+917771040630" target="_blank" className="btn btn-dark">WhatsApp</a>
                <a href="tel:+91771040630" className="btn btn-primary">Call us</a>
            </div>
        </div>
        <div className="circle-anim relative pt-3 w-[272px] h-[272px] mb-[-140px] mx-auto">
            <div className="bg-circle absolute inset-0 rounded-full before:absolute before:inset-0 before:rounded-full before:z-[2] ">
                <img src="/src/assets/Images/glowing-ball.png" alt="glowing"/>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle "></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-800"></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-1600"></div>
                <div className="absolute inset-0 border border-white border-opacity-20 rounded-full animate-circle anim-delay-2400"></div>
            </div>
        </div>
    </section>
  )
}

export default Radial
