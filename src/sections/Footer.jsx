import React from 'react'

const Footer = () => {
  return (
    <footer className="mainfooter bg-slate-900 relative z-10">
  <div className="footer-top">
    <div className="container">
          <ul className="py-14">
               {/* {
                data.social.map((elm)=>(
                    <li key={elm.title}><a href={elm.url} target="_blank"><i className={`fa-brands ${elm.icon}`}></i>{elm.title}</a></li>
                  ))
                } */}
          </ul>
    </div>

  </div>
  <div className="py-5 container">
     <p className='text-base'>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
  </div>
</footer>
  )
}

export default Footer
