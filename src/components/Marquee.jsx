const Marquee = ({info, marquee}) => {
  return (
    <div className={`py-6 ${marquee ? marquee : "animate-marquee"} whitespace-nowrap`}> 
        {info.map((elm, index) => (<span key={index} className="whitespace-nowrap text-2xl mr-20 inline-flex items-center text-white text-opacity-90 font-barlow before:content-['*'] before:text-primary before:text-h2 before:self-center">{elm.title}</span>))}
    </div>
  )
}

export default Marquee
