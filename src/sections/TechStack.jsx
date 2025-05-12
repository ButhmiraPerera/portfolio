import React from "react";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader"; // Add this import
import { techStackIcons } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', 
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        );
    }, []);

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="[width:100%] [height:100%] md:[padding:0_2.5rem] [padding:0_1.25rem]">
                <TitleHeader 
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to the Table"
                />

                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card group [overflow:hidden]  [@media(min-width:1280px)]:[border-radius:9999px] [border-radius:0.5rem]">
                            <div className="tech-card-animated-bg relative z-2" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon}/>
                                </div>
                                <div className="padding-x [width:100%]">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;