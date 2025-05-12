import React from "react";

const TitleHeader = ({title, sub}) => {
    return(
        <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:1.25rem]">
            <div className="hero-badge">
                <p>{sub}</p>
            </div>
            <div className="[font-weight:600] md:[font-size:3rem] [font-size:1.875rem] [text-align:center]">
                {title}
            </div>
        </div>
    )
}

export default TitleHeader;