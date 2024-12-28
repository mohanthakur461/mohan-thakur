import React from 'react'

const Footer = ({info}) => {
  return (
    <footer className="mainfooter bg-secondary relative z-10">
  <div className="footer-top">
    <div className="container">
          <ul className="py-14 flex justify-center items-center gap-5">
               {
                info.map((elm)=>(
                    <li key={elm.title}><a className="text-[0] leading-[0] block" href={elm.url} target="_blank"><img src={elm.icon} alt={elm.title} width={40} height={40}/>{elm.title}</a></li>
                  ))
                }
          </ul>
    </div>

  </div>
  <div className="py-5 container">
     <p className='text-base text-center'>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
  </div>
</footer>
  )
}

export default Footer
