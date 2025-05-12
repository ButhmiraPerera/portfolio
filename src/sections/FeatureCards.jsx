import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
    return (
        <div className='[width:100%] [padding:4rem] '>
            <div className='
                [max-width:100%] 
                [margin-left:auto] 
                [margin-right:auto] 
                [display:grid] 
                [grid-template-columns:repeat(1,minmax(0,1fr))]
                [@media(min-width:768px)]:[grid-template-columns:repeat(2,minmax(0,1fr))]
                [@media(min-width:990px)]:[grid-template-columns:repeat(3,minmax(0,1fr))]
                [gap:1.5rem]
            '>
                {abilities.map(({imgPath, title, desc}) => (
                    <div 
                        key={title} 
                        className='
                            card-border 
                            [border-radius:0.75rem] 
                            [padding:2rem] 
                            [display:flex] 
                            [flex-direction:column] 
                            [gap:1rem]
                        '
                    >
                        <div className='
                            [width:3.5rem] 
                            [height:3.5rem] 
                            [display:flex] 
                            [align-items:center] 
                            [justify-content:center] 
                            [border-radius:9999px]
                        '>
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className='
                            [color:white] 
                            [font-size:1.5rem] 
                            [font-weight:600] 
                            [margin-top:0.5rem]
                        '>
                            {title}
                        </h3>
                        <p className='
                            [color:var(--color-white-50)] 
                            [font-size:1.125rem]
                        '>
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards