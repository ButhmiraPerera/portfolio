import React from "react";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";

const Testimonials = () => {
    return(
        <section id="testimonials" className="[display:flex] [justify-content:center] [align-items:center] section-padding [background:transparent]">
            <div className="[width:100%] [height:100%] md:[padding-left:2.5rem] md:[padding-right:2.5rem] [padding-left:1.25rem] [padding-right:1.25rem]">
                <TitleHeader title="What People Say About Me?"
                sub="⭐️ Client Feedback Highlights"/>

                <div className="[margin-top:4rem] [color:inherit]
                    [columns:1] [gap:1rem]
                    [@media(min-width:768px)]:[columns:2]
                    [@media(min-width:990px)]:[columns:3]">
                    {testimonials.map(({imgPath, name, mentions, review}, index) => (
                        <GlowCard key={index} card={{review}} index={index}>
                            <div className="[display:flex] [align-items:center] [gap:0.75rem]">
                                <div>
                                    <img src={imgPath} alt={name} />
                                </div>
                                <div>
                                    <p className="[font-weight:bold] [color:inherit]">{name}</p>
                                    <p className="[color:var(--color-white-50)]">{mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials