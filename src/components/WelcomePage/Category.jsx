import React from "react";

export default function Category({categoryImage, categoryText, categoryCover}) {
    return (
        <div className="category_div">
            <div className="top">
                <img className="category_main" src={categoryImage} alt={categoryText} />
                <img className="category_cover" src={categoryCover} alt={categoryText} />
            </div>
            <div className="bottom">
                <h4>{categoryText}</h4>
            </div>
        </div>)
}