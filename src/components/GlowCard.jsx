import React, { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
    const cardRefs = useRef({});

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if(!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60)
    }

    return(
        <div 
            ref={(el) => (cardRefs.current[index] = el)} 
            onMouseMove={handleMouseMove(index)} 
            className="card card-border timeline-card [border-radius:0.75rem] [padding:2.5rem] [margin-bottom:1.25rem] [break-inside:avoid]"
        >
            <div className="glow"/>
            <div className="[display:flex] [align-items:center] [gap:0.25rem] [margin-bottom:1.25rem]">
                {Array.from({length: 5}, (_, i) => (
                    <img src="/images/star.png" alt="star" key={i} className="[width:1.25rem] [height:1.25rem]" />
                ))}
            </div>
            <div className="[margin-bottom:1.25rem]">
                <p className="[color:var(--color-white-50)] [font-size:1.125rem]">{card.review}</p>
            </div>
            {children}
        </div>
    )
}

export default GlowCard;