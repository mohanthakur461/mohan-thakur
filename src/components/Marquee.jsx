
const skills = [ 
  {"title": "HTML5"},
  {"title": "CSS3"},
  {"title": "Bootstrap"},
  {"title": "SASS"},
  {"title": "Jquery"},
  {"title": "Javascript"},
  {"title": "Wordpress"},
  {"title": "Elementor"},
  {"title": "Webflow"},    
  { "title": "React JS"},
  { "title": "GSAP"},
  { "title": "Three JS"}, 
  { "title": "Next JS"},
  { "title": "Tailween"} 
];
const Marquee = ({marquee}) => {
  return (
    <div className={`py-6 ${marquee ? marquee : "animate-marquee"} whitespace-nowrap`}> 
        {skills.map((elm, index) => (<span key={index} className="whitespace-nowrap text-2xl mr-20 inline-flex items-center text-white text-opacity-90 font-barlow ">{elm.title}</span>))}
    </div>
  )
}

export default Marquee
