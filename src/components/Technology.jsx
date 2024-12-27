const tech = [
  "/brands/html-5.svg",
  "/brands/css3.svg", 
  "/brands/sass.svg",
  "/brands/bootstrap.svg",
  "/brands/jquery.svg",
  "/brands/js.svg",
  "/brands/wordpress.svg",
  "/brands/elementor.svg",
  "/brands/webflow.svg",
  "/brands/gsap.svg",
  "/brands/threejs.svg",
  "/brands/react-js.svg",
  
  "/brands/next.svg",
  "/brands/tailwind.svg",
];

const Technology = ({marquee}) => {
  return (
    <ul className={`clientList ${marquee? marquee : "animate-marquee"}  inline-flex gap-5 `}> 
        {tech.map((elm, index) => (<li key={index} className="p-10 aspect-[1/.7] inline-flex flex-col items-center justify-center bg-white-90"> <img src={elm} alt={`Client ${index + 1}`} className="w-full min-w-32 h-full max-h-full opacity-90" loading="lazy" /></li>))}    
    </ul>
  )
}
 
export default Technology
