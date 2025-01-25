import React from 'react'

const Work = ({info}) => {
  return (
    <section className='WorkSection md:py-sp-100' id="work">
       <div className='container'>
            <h2 className='text-center uppercase font-bold mb-16'>Work</h2>
            <ul className="workList grid gap-5 2xl:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {info.work.map((item, index) => (
                    <li key={index} className='relative'>
                        <a href={item.url} className="aspect-[16/11] relative overflow-hidden block after:h-3/5 after:absolute after:w-full after:bottom-0 after:bg-gradient-to-t  after:from-[#242729]" target='_blank'>
                            <span className="overlay absolute left-0 right-0 bottom-0 p-5 text-white z-10">{item.title}</span>
                            <img className="object-cover h-full hover:scale-110 transition-transform duration-500	" src={item.img} alt={`Project ${item.title}`} width={800} height={530} loading="lazy" />
                        </a>
                    </li>
                ))}
            </ul>
       </div>
    </section>
  )
}

export default Work
