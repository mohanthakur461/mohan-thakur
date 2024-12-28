import React from 'react'

const Work = ({info}) => {
  return (
    <section className='WorkSection md:py-sp-100'>
       <div className='container'>
            <h2 className='text-center uppercase font-bold mb-16'>Work</h2>
            <ul className="workList grid gap-5 2xl:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {info.map((item, index) => (
                    <li key={index} className='relative'>
                        <a href={item.url} className="aspect-video" target='_blank'>
                            <span className="overlay absolute left-0 right-0 bottom-0 p-5 bg-secondary bg-opacity-85 text-white">{item.title}</span>
                            <img className="object-fill" src={item.img} alt={`Project ${item.title}`} width={800} height={530} loading="lazy" />
                        </a>
                    </li>
                ))}
            </ul>
       </div>
    </section>
  )
}

export default Work
