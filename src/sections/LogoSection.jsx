import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({icon}) => {
    return(
        <div className='[flex:none] [display:flex] [justify-content:center] [align-items:center] [width:8rem] md:[width:10rem]'>
            <img 
                src={icon.imgPath}  
                alt={icon.name} 
                className='[max-width:100%] [height:auto]'
            />
        </div>
    )
}

const LogoSection = () => {
    return(
        <div className='md:[margin:5rem_0] [margin:2.5rem_0] [position:relative] [overflow:hidden]'>
            {/* Gradient edges */}
            <div className='
                [width:9rem]
                [height:100%]
                [position:absolute]
                [bottom:0]
                [z-index:20]
                [left:0]
                [background:linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]
            ' />
            <div className='
                [width:9rem]
                [height:100%]
                [position:absolute]
                [bottom:0]
                [z-index:20]
                [right:0]
                [background:linear-gradient(-90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]
            ' />

            {/* Marquee container */}
            <div className='[width:100vw] [overflow:hidden] [position:relative] [height:13rem]'>
                <div className='
                    [display:flex]
                    [align-items:center]
                    [width:200%]
                    [height:100%]
                    [position:absolute]
                    [overflow:hidden]
                    [animation:marquee_60s_linear_infinite]
                    md:[gap:3rem]
                    [gap:1.25rem]
                '>
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={`first-${icon.name}`} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={`second-${icon.name}`} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoSection