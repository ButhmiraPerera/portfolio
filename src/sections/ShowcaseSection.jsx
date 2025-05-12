import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card, 
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * index,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none none'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { 
                opacity: 1, 
                duration: 1.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center'
                }
            }
        )
    }, [])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='[width:100%]'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Ryde" className='[width:100%] [height:100%] [object-fit:cover] [border-radius:0.75rem]' />
                        </div>
                        <div className='text-content [display:flex] [flex-direction:column] [gap:1.25rem] [margin-top:1.25rem]'>
                            <h2 className='[font-size:1.5rem] [line-height:2rem] [font-weight:700] md:[font-size:1.875rem] md:[line-height:2.25rem] lg:[font-size:2.25rem] lg:[line-height:2.5rem]'>
                                On-Demand Rides Made Simple with a Powerful, user-friendly App called Ryde
                            </h2>
                            <p className='[color:var(--color-white-50)] md:[font-size:1.25rem] [font-size:1.125rem]'>
                                An app built with React, Expo, & TailwindCSS for a fast, user-friendly experience
                            </p>
                        </div>
                    </div>
                    
                    {/* RIGHT */}
                    <div className='project-list-wrapper [overflow:hidden]'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper [background-color:#ffefdb] [height:16rem] [position:relative] [border-radius:0.75rem]'>
                                <img src="/images/project2.png" alt="Library Management Platform" className='[width:100%] [height:100%] [object-fit:contain] [border-radius:0.75rem]' />
                            </div>
                            <h2 className='[font-size:1.125rem] [line-height:1.75rem] [font-weight:600] [margin-top:1.25rem] md:[font-size:1.25rem] lg:[font-size:1.5rem]'>
                                Library Management Platform
                            </h2>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper [background-color:#ffe7eb] [height:16rem] [position:relative] [border-radius:0.75rem]'>
                                <img src="/images/project3.png" alt="YC Directory" className='[width:100%] [height:100%] [object-fit:contain] [border-radius:0.75rem]' />
                            </div>
                            <h2 className='[font-size:1.125rem] [line-height:1.75rem] [font-weight:600] [margin-top:1.25rem] md:[font-size:1.25rem] lg:[font-size:1.5rem]'>
                                YC Directory
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection