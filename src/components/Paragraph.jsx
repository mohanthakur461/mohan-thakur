import React, {useRef} from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

const Paragraph = ({value, cls}) => {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target:element,
        offset: ['start 0.7' , 'start 0.25']
    })

    const words = value.split(" ");

    const Word = ({children, range, progress}) => {
        const opacity = useTransform(progress, range, [0, 1])
        return (
            <span className='word relative'>
                <span className='shadow absolute mr-[0.2em] opacity-60'>{children}</span>
                <motion.span style={{opacity}} className='mr-[0.2em]'>{children}</motion.span>
            </span>
            
        )
      }

  return (
    <p className={cls} ref={element}>
      {words.map((word, i)=>{
        const start = i/words.length;
        const end = start + (1/words.length);
        return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
      })}
    </p>
  )

 
}

export default Paragraph
