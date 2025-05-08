import React from 'react'
import { counterItems } from '../constants/index.js'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='[padding:0_1.25rem] [margin-top:8rem] lg:[margin-top:0] xl:[margin-top:5rem]'>
      <div className='
        [max-width:100%] 
        [margin-left:auto] 
        [margin-right:auto] 
        [display:grid] 
        [grid-template-columns:repeat(1,minmax(0,1fr))]
        [@media(min-width:768px)]:[grid-template-columns:repeat(2,minmax(0,1fr))]
        [@media(min-width:990px)]:[grid-template-columns:repeat(4,minmax(0,1fr))]
        [gap:1.5rem]
      ' >
        {counterItems.map((item) => (
          <div 
            key={item.label}
            className='
              [background-color:var(--color-zinc-900)] 
              [border-radius:0.5rem] 
              [padding:1.5rem] 
              [display:flex] 
              [flex-direction:column] 
              [justify-content:center]
            '
          >
            <div className='[color:white] [font-size:3rem] [font-weight:700] [margin-bottom:0.5rem]'>
              <CountUp 
                suffix={item.suffix} 
                end={item.value} 
                duration={2.5}
              />
            </div>
            <div className='[color:var(--color-white-50)] [font-size:1.125rem]'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter