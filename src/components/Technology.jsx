const Technology = ({info, marquee}) => {
  return (
    <ul className={`clientList ${marquee? marquee : "animate-marquee"}  inline-flex gap-1 md:gap-3`}> 
        {info.map((elm, index) => (<li key={index} className="py-3 px-4 md:py-5 md:px-6 aspect-[1/.7] inline-flex flex-col items-center justify-center bg-secondary"> <img src={elm.icon} alt={`Client ${index + 1}`} className="w-full min-w-14 md:min-w-20 h-full max-h-full opacity-90" loading="lazy" /></li>))}    
    </ul>
  )
}
 
export default Technology
