import React from "react";

export default function Footer() {
    return <footer>
        <div className="footer_top">
            <div className="subscribe_section">
                <h1>Artopia</h1>
                <p className="grey-text">Enter your email to get notified by ArtBit for latest updates.</p>
                <div className="footer_social">
                    <img src="./assets/soc.svg" alt="" />
                    <img src="./assets/soc-1.svg" alt="" />
                    <img src="./assets/soc-2.svg" alt="" />
                </div>
                <form className="custom_input">
                    <input type="email" required />
                    <button className="btn btn-purple"><img src="./assets/arrow.svg" alt="enter" /></button>
                </form>
            </div>
            <ul className="option_list">
                <li className="list_header">Artopia</li>
                <li>Explore</li>
                <li>Digital Art</li>
                <li>About</li>
            </ul>
            <ul className="option_list">
                <li className="list_header">My Account</li>
                <li>Profile</li>
                <li>Favourites</li>
                <li>Watchlist</li>
                <li>My Collections</li>
                <li>Settings</li>
            </ul>
            <ul className="option_list">
                <li className="list_header">Resources</li>
                <li>Platform Status</li>
                <li>Partners</li>
                <li>Taxes</li>
                <li>Newsletter</li>
            </ul>
            <ul className="option_list">
                <li className="list_header">Community</li>
                <li>Help Center</li>
                <li>Suggest Feature</li>
                <li>Subscribe</li>
            </ul>


        </div>
    </footer>
}