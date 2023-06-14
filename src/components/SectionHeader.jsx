import React from "react";

export default function SectionHeader({hero,subHero,button}) {
    return (
        <div className="section_header">
            {hero && <h1 className="hero">{hero}</h1>}
            {subHero && <p className="sub_hero">{subHero}</p>}
            {button && <button className="btn btn-purple">{button}</button>}
        </div>
    )
}