import React from 'react'
import glowing from '../../public/images/glowing-ball.png';
import Image from 'next/image';

const GetinTouch = () => {
  return (
    <section className="pt-24" id="getintouch">
        <div className='container'>
            <div className='mx-auto max-w-sm text-center'>
                <h2 className='text-h2 font-anton uppercase'>Get In Touch</h2>
                <p>Ready to transform your digital landscape? Reach out to us today for a consultation.</p>
            </div>
        </div>
        <div className="radial-anim active">
                            {/* <div className="btn-group-container">
                                <div className="left-column column">
                                    <a href={`mailto:${props.data.email}`} className="btn btn-dark mouse-cursor-gradient-tracking">
                                        <span className="btn-txt d-flex align-items-center"><img src={email} alt="Message"/> Email </span>
                                    </a>
                                    
                                    <a href="https://account.microsoft.com/?username=mohan.thakur61" target="_blank" className="btn btn-dark mouse-cursor-gradient-tracking"><span className="btn-txt d-flex align-items-center"><img src={skype} width="24" alt="Connect Skype"/>
                                            Skype</span></a>
                                </div>
                                <div className="right-column column">
                                    <a href="https://wa.me/+917771040630" target="_blank" className="btn btn-dark  mouse-cursor-gradient-tracking" ><span className="btn-txt d-flex align-items-center"> <img src={whatsapp} alt="Connect WhatsApp"/>
                                            WhatsApp</span></a>
                                    <a href={`tel:${props.data.phone}`} className="btn btn-dark mouse-cursor-gradient-tracking"><span className="btn-txt d-flex align-items-center"><img src={call} alt="Telphone"/> Call us</span></a>
                                </div>
                            </div> */}
                            <div className="circle-anim">
                                <div className="bg-circle mb-[-128px]">
                                    <Image className="mx-auto" src={glowing} alt="glowing" width={256} height={256}/>
                                    <div className="bg-circle__elem"></div>
                                    <div className="bg-circle__elem mod--second"></div>
                                    <div className="bg-circle__elem mod--third"></div>
                                    <div className="bg-circle__elem mod--fourth"></div>
                                </div>
                            </div>
                        </div>
    </section>
  )
}

export default GetinTouch
