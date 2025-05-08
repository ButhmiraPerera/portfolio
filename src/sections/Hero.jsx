import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', 
            {
                y: 50,
                opacity: 0
            },
            {
                y:0,
                opacity: 1,
                stagger:0.2,
                duration:1,
                ease:'power2.inOut'
            }
        )
    })

    return(
        <section id='hero' className='[position:relative] [overflow:hidden]'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className='hero-layout'>
                {/*LEFT: HERO CONTENT*/}
                <header className='[display:flex] [flex-direction:column] [justify-content:center] md:[width:100%] [width:100vw] md:[padding:0_5rem] [padding:0_1.25rem]'>
                    <div className='[display:flex] [flex-direction:column] [gap:1.75rem]'>
                        <div className='hero-text'>
                            <h1>Shaping 
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='[display:flex] [align-items:center] md:[gap:0.75rem] [gap:0.25rem] [height:1em]'>
                                                <img 
                                                src={word.imgPath}
                                                 alt={word.text} 
                                                 className='md:[width:2rem] md:[height:2rem] [width:1.5rem] [height:1.5rem] md:[padding:0.5rem] [padding:0.475rem] [border-radius:9999px] [background-color:var(--color-white-50)]' />
                                            <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        
                        <p className='text-white-50 md:[font-size:1.25rem] [position:relative] [z-index:10] [pointer-events:none] [padding-top:1.5rem] [padding-right:1.5rem] [padding-bottom:1.5rem]'>
                            Hi, I'm Buthmira, a developer with a passion for coding.
                            </p>
                            <Button className="md:[width:20rem] md:[height:4rem] [width:15rem] [height:3rem]" id="button" text="See my Work" />
                        
                    </div>
                </header>
                
                {/*RIGHT:3D MODEL*/}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}

export default Hero