import React from "react";

export default function Card({ cardImage, extraClass }) {
    const styling = {
        background: "url(" + (cardImage || "./assets/card-bg.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "calc(100% + 8rem)"
    }
    return (
        <div style={styling} className={extraClass || "card"}>
            <div>
                <div className="grid_container">
                    {
                        extraClass
                        ?
                            <>
                                <img src="./assets/card-icon.png" alt="" />
                                <h4>Crush</h4>
                                <h5>Trevor Claxton</h5>
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
        </div>
    )
}