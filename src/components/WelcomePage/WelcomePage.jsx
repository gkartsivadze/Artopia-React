import React, {useEffect} from "react";
import StatisticList from "./StatisticList";
import Card from "./Card";
import SectionHeader from "../SectionHeader";
import CreatorCard from "./CreatorCard";
import Category from "./Category";
import data from "../../creator_data.json";
import Carousel from "./Carousel";

export default function WelcomePage() {
    $(".animation_div .card").each((index,card) => {
        $(card).css("top", index * 12 + "rem");
            let inter = setInterval(() => {
                $(card).css("top", parseInt($(card).css("top")) + 1 + "px")
                if(parseInt($(card).css("top")) > $("#statistics_section").height() + $(".card").outerHeight()) {
                    $(card).css("top", 0 - $(".card").outerHeight() + "px");
                }
            }, 40)
        });
    return <main>
        <section id="welcome_section">
        <img src="./assets/welcome-1.png" alt="" />
        <img src="./assets/welcome-2.png" alt="" />
        <div className="gapped_container">
            <h1 style={{fontSize: "3rem"}}>Buy and Sell<br />Digital Arts</h1>
            <p>The world’s largest online marketplace of online digital art </p>
            <h3><a href="#">Explore</a></h3>
            <StatisticList />
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
            <div className="grid_container">
                {data.profiles.map(elem => {
                    return <CreatorCard key={elem.id} count={elem.id} creatorImg={elem.images} creatorName={elem.name} creatorSales={elem.sales} />
                })}
            </div>
        </section>
        <section id="statistics_section">
                <div className="info_div">
                    <h1>We Have The Best Digital Artists</h1>
                    <p className="text_color_an">The world's Largest Digital Marketplace for digital art and 3d assets</p>
                    <StatisticList />
                    <button className="btn btn-transparent">Create</button>
                </div>
                <div className="animation_div">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
        </section>
        <section id="categories_section">
            <SectionHeader hero="Categories" />
            <div className="grid_container">
                {data.categories.map(elem => {
                    return <Category key={elem.id} categoryImage={elem.image} categoryText={elem.name} categoryCover={elem.cover} />
                })}
            </div>
        </section>
        <section id="digital_section">
            <h1>Digital Art trending in All Categories</h1>
            <Carousel passData={data.slider} />
        </section>
        </main> 
}