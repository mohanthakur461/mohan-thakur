import React, { useState } from 'react'
import styles from "../page.module.css"

const navLinks = [
  { title: 'Home', path : '/#home' },
  { title: 'About', path : '/#aboutSection' },
  { title: 'Work', path : '#work' },
  { title: 'Get In Touch', path : '#getintouch'},

]

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {setNav(!nav)}
  return (
    <header className={`mainHeader w-full z-50  fixed bg-secondary`}>
      <nav className={`navbar ${nav? "open-menu": ""}`}>
        <div className="container flex justify-between items-center min-h-14">
            <a className="navbar-brand relative" href="#">
              <span className="header__title__text text-4xl text-white uppercase font-barlow">MohanT</span>
                <svg className="logo--l overflow-visible absolute left-0 top-7 z-[2]" width="40" height="40" fill="none" viewBox="0 0 25 25" aria-hidden="true">
                <g className="logo--l__circle scale-[0.2] translate-x-[63px]">
                <circle className="text-primary-400" fill="currentColor" cx="16.11" cy="5.5" r="15"></circle>
                <text className="small-logo text-white hidden" fill="currentColor" x="30%" y="50%">M.</text>
                </g>
            </svg> 
            </a>
            <button className={`hamburger md:hidden relative top-0 transform-none bg-transparent p-0 z-10 text-[28px] cursor-pointer transition-all duration-300 ${nav? "active" : ""}`} onClick={toggleNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg className='w-12 h-12' width="100" height="100" viewBox="0 0 100 100">
                <path className="line line1" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="6" strokeDasharray={`${nav? "90 207": "60 207"}`}  strokeDashoffset={`${nav? "-134": "0"}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
                <path className="line line2" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="6" strokeDasharray={`${nav? "1 60": "60 60"}`} strokeDashoffset={`${nav? "-30": "0"}`} d="M 20,50 H 80"></path>
                <path className="line line3" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="6" strokeDasharray={`${nav? "90 207": "60 207"}`} strokeDashoffset={`${nav? "-134": "0"}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
              </svg>
            </button>
            <div className={`menu-col fixed md:static w-72 pt-16 md:pt-0 h-full md:h-auto top-0 right-0 p-5 md:p-0 md:w-auto bg-slate-800 md:bg-transparent transition-transform md:translate-x-0 ${nav? "translate-x-0": "translate-x-full"}`}>
              <ul className="navbar-nav flex gap-5 md:gap-12 flex-col md:flex-row">
                { navLinks.map((link, index) => (
                      <li key={index} className="nav-item">
                        <a className="text-2xl uppercase text-white opacity-80 py-4 inline-block font-barlow tracking-wide" href={link.path}  onClick={(e) => {
                            e.preventDefault(); 
                            document.getElementById(link.path)?.scrollIntoView({ behavior: "smooth" });
                          }}>{link.title}</a>
                      </li>
                  ))
                  }
              </ul>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
