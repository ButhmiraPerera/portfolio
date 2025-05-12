import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Card animation
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Gradient line animation
    gsap.to('.timeline', {
      transformOrigin: "bottom bottom",
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
            gsap.to('.timeline', {
                scaleY: 1 - self.progress,
            })
        }
      }
    });

    // Logo appear animation
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        ease: 'power2.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        }
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="[width:100%] [margin-top:5rem] md:[margin-top:10rem] [padding:var(--section-padding)] xl:[padding-left:0] xl:[padding-right:0]"
    >
      <div className="[width:100%] [height:100%] md:[padding-left:5rem] md:[padding-right:5rem] [padding-left:1.25rem] [padding-right:1.25rem]">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        
        <div className="[margin-top:8rem] [position:relative]">
          <div className="[position:relative] [z-index:50] xl:[gap:8rem] [gap:2.5rem] [display:flex] [flex-direction:column]">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                {/* Left Content */}
                <div className="[@media(min-width:1280px)]:[width:30.1%] [padding-left:4rem]">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>

                {/* Right Content */}
                <div className="[@media(min-width:1280px)]:[width:69.9%]">
                  <div className="[display:flex] [align-items:flex-start]">                 
                    <div className="timeline-wrapper">
                      <div className="timeline"/>
                      <div className="gradient-line [width:0.25rem] [height:100%]"/>
                    </div>
                    <div className="expText [display:flex] xl:[gap:5rem] md:[gap:2.5rem] [gap:1.25rem] [position:relative] [z-index:20]">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="[font-weight:600] [font-size:1.875rem] [line-height:2.25rem]">{card.title}</h1>
                        <p className="[margin-top:1.25rem] [margin-bottom:1.25rem] [color:var(--color-white-50)]">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="[color:#839cb5] [font-style:italic]">
                          Responsibilities
                        </p>
                        <ul className="[list-style-type:disc] [margin-left:1.25rem] [margin-top:1.25rem] [display:flex] [flex-direction:column] [gap:1.25rem] [color:var(--color-white-50)]">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="[font-size:1.125rem] [line-height:1.75rem]">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;