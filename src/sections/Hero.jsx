import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'


const Hero = () => {
    return(
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className='hero-layout'>
                {/*LEFT: HERO CONTENT*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>Shaping 
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1  h-[1em]'>
                                                <img 
                                                src={word.imgPath}
                                                 alt={word.text} 
                                                 className=' md:size-8 size-6 md:p-2  p-19 rounded-full bg-[var(--color-white-50)]' />
                                            <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none [padding-top:1.5rem] [padding-right:1.5rem] [padding-bottom:1.5rem]'>
                            Hi, I'm Buthmira, a developer with a passion for coding.
                            </p>
                            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work" />
                        
                    </div>
                </header>
                
                {/*RIGHT:3D MODEL*/}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero