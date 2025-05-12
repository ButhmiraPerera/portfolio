import React, { useRef } from 'react'
import { counterItems } from '../constants/index.js'
import CountUp from 'react-countup'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = () => {
  const counterRef = useRef(null)
  const countersRef = useRef([])

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector('.counter-number')
      const item = counterItems[index]

      // Set initial value to 0
      gsap.set(numberElement, { innerText: '0' })

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: 'power2.out',
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: '#counter',
          start: 'top center',
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`
        },
      })
    }, counterRef)
  }, [])

  return (
    <div id='counter' ref={counterRef} className='[padding:0_1.25rem] [margin-top:8rem] lg:[margin-top:0] xl:[margin-top:5rem]'>
      <div className='
        [max-width:100%] 
        [margin-left:auto] 
        [margin-right:auto] 
        [display:grid] 
        [grid-template-columns:repeat(1,minmax(0,1fr))]
        [@media(min-width:768px)]:[grid-template-columns:repeat(2,minmax(0,1fr))]
        [@media(min-width:990px)]:[grid-template-columns:repeat(4,minmax(0,1fr))]
        [gap:1.5rem]
        [padding-right:5.25rem]
      '>
        {counterItems.map((item, index) => (
          <div 
            key={item.label}
            ref={(el) => el && (countersRef.current[index] = el)}
            className='
              [background-color:var(--color-zinc-900)] 
              [border-radius:0.5rem] 
              [padding:1.5rem] 
              [display:flex] 
              [flex-direction:column] 
              [justify-content:center]
            '
          >
            <div className='counter-number [color:white] [font-size:3rem] [font-weight:700] [margin-bottom:0.5rem]'>
              0{item.suffix}
            </div>
            <div className='[color:var(--color-white-50)] [font-size:1.125rem]'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter