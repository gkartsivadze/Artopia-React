import React from "react";

export default function Category({categoryImage, categoryText}) {
    return (
        <div className="category_div">
        <img src={categoryImage} alt="" />
        <div className="bottom">
        <h2 className="bg-black">{categoryText}</h2>
        </div>
        </div>)
}