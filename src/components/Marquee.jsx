const Marquee = ({info, marquee}) => {
  return (
    <div className={`py-6 ${marquee ? marquee : "animate-marquee"} whitespace-nowrap`}> 
        {info.map((elm, index) => (<span key={index} className="whitespace-nowrap text-3xl uppercase mr-16 inline-flex items-center text-white text-opacity-90 font-barlow before:content-['★'] before:text-primary before:mr-3">{elm.title}</span>))}
    </div>
  )
}

export default Marquee
