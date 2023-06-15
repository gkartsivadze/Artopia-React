import React from "react";
import Card from "./Card";

export default function Carousel({ passData }) {
    function handleSwap(state) {
        switch (state) {
            case "next":
                $("#digital_carousel .container:nth-of-type(1)").before($("#digital_carousel .container:nth-of-type(7)"))
                break;
            case "prev":
                $("#digital_carousel").append($("#digital_carousel .container:nth-of-type(1)"))
                break;
            default:
                alert("Something went wrong");
        }
    }
    return (
        <>
            <div id="digital_carousel">
                {passData.map(elem => {
                    return (<div key={elem.id} className="container">
                        <Card extraClass="carousel" cardImage={elem.image} />
                    </div>)
                })}
            </div>
            <div id="carousel_navigator">
                <button onClick={() => handleSwap("next")} className="btn btn-transparent">
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41096 0.846192C6.98551 0.420736 6.29823 0.420736 5.87277 0.846192L0.865479 5.85349C0.440023 6.27894 0.440023 6.96622 0.865479 7.39167L5.87277 12.399C6.29823 12.8244 6.98551 12.8244 7.41096 12.399C7.83642 11.9735 7.83642 11.2862 7.41096 10.8608L3.17822 6.61713L7.41096 2.38438C7.83642 1.95892 7.82551 1.26074 7.41096 0.846192V0.846192Z" fill="white" />
                    </svg>
                </button>
                <button onClick={() => handleSwap("prev")} className="btn btn-transparent">
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.589112 0.847569C0.163655 1.27303 0.163655 1.9603 0.589112 2.38576L4.82186 6.6185L0.589112 10.8512C0.163655 11.2767 0.163655 11.964 0.589112 12.3894C1.01457 12.8149 1.70184 12.8149 2.1273 12.3894L7.13459 7.38214C7.56005 6.95669 7.56005 6.26941 7.13459 5.84395L2.1273 0.83666C1.71275 0.422112 1.01457 0.422113 0.589112 0.847569Z" fill="white" />
                    </svg>
                </button>
            </div>
        </>
    )
}