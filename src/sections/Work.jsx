import React from 'react'

const project = [
    {"id":1, "title": "Havis", "category": "Wordpress", "url": "https://www.havis.com/", "img" : "https://img.veenaworld.com/wp-content/uploads/2022/11/The-Best-Time-to-Visit-Greece-%E2%80%93-A-Seasonal-Guide-scaled-e1668532223187-800x530.jpg"},
    {"id":2, "title": "Millenium", "category": "Wordpress","url": "https://www.mymillennium.us/", "img" : "https://img.veenaworld.com/wp-content/uploads/2022/11/The-Best-Time-to-Visit-Greece-%E2%80%93-A-Seasonal-Guide-scaled-e1668532223187-800x530.jpg"},
    {"id":3, "title": "Liquid Spring", "category": "Wordpress", "url": "https://liquidspring.com/", "img" : "https://img.veenaworld.com/wp-content/uploads/2022/11/The-Best-Time-to-Visit-Greece-%E2%80%93-A-Seasonal-Guide-scaled-e1668532223187-800x530.jpg"},
    {"id":4, "title": "ScaleNorth", "category": "Wordpress", "url":"https://scalenorth.com/",  "img" : "https://img.veenaworld.com/wp-content/uploads/2022/11/The-Best-Time-to-Visit-Greece-%E2%80%93-A-Seasonal-Guide-scaled-e1668532223187-800x530.jpg"},
    {"id":5, "title": "Bonfire Effect", "category": "Wordpress", "url": "https://www.bonfireeffect.com/", "img" : "https://img.veenaworld.com/wp-content/uploads/2022/11/The-Best-Time-to-Visit-Greece-%E2%80%93-A-Seasonal-Guide-scaled-e1668532223187-800x530.jpg"}
];

const Work = () => {
  return (
    <section className='WorkSection sec-space'>
       <div className='container'>
            <h2 className='text-center uppercase font-bold'>Work</h2>
            <ul className="workList">
                {project.map((item, index) => (
                    <li key={index}>
                        {item.title}
                        <img src={item.img} alt={`Project ${item.title}`} width={800} height={530} loading="lazy" />
                    </li>
                ))}
            </ul>
       </div>
    </section>
  )
}

export default Work
