import React from "react"
import Statistic from "./statistic"
import Card from "./card"
import SectionHeader from "../SectionHeader"
import CreatorCard from "./CreatorCard"

export default function WelcomePage() {
    return <main>
        <section id="welcome_section">
        <img src="./assets/welcome-1.png" alt="" />
        <img src="./assets/welcome-2.png" alt="" />
        <div className="gapped_container">
            <h1 style={{fontSize: "3rem"}}>Buy and Sell<br />Digital Arts</h1>
            <p>The world’s largest online marketplace of online digital art </p>
            <h3><a href="#">Explore</a></h3>
            <div className="statistic_list">
                <Statistic num={"999,000"} category={"Digital art file"} />
                <Statistic num={"2,000"} category={"Art Seller"} />
                <Statistic num={"1,0000"} category={"Buyer"} />
            </div>
        </div>
        </section>
        <section id="trending_section">
            <SectionHeader hero="Trending Sales" subHero="Checkout our weekly updated trending sales" />
            <div className="card_list">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
        <section id="creators_section">
            <SectionHeader hero="Top Creators" subHero="Checkout Top Rated Creators On The NFT Marketplace" button="View Rankings" />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
            <CreatorCard />
        </section>
        </main> 
}