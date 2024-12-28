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
    <ul className={`clientList ${marquee? marquee : "animate-marquee"}  inline-flex gap-1 md:gap-3`}> 
        {tech.map((elm, index) => (<li key={index} className="py-3 px-4 md:py-5 md:px-6 aspect-[1/.7] inline-flex flex-col items-center justify-center bg-secondary"> <img src={elm} alt={`Client ${index + 1}`} className="w-full min-w-14 md:min-w-20 h-full max-h-full opacity-90" loading="lazy" /></li>))}    
    </ul>
  )
}
 
export default Technology
