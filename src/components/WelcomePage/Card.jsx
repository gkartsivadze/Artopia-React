import React from "react";

export default function Card({ cardImage = "./assets/card-bg.png", extraClass }) {
    return (
        <div className={extraClass || "card"}>
            <img className="card_image" src={cardImage} alt="" />
            <div className="grid_container">
                {
                    extraClass
                        ?
                        <>
                            <img src="./assets/card-icon.png" alt="" />
                            <h5>Crush</h5>
                            <h6>Trevor Claxton</h6>
                        </>
                        :
                        <>
                            <h3>Da Viper</h3>
                            <img src="./assets/card-icon.png" alt="Card" />
                            <p className="card-text grey-text">Creator</p>
                            <p className="card-name">Tom Edison</p>
                            <p className="card-text grey-text text-align-right">Amount</p>
                            <p className="card-price text-align-right">45.50 USD</p>
                        </>
                }
            </div>
        </div>
    )
}