import React, { useEffect, useState } from "react";
import StatisticList from "./StatisticList";
import Card from "./Card";
import SectionHeader from "../SectionHeader";
import CreatorCard from "./CreatorCard";
import Category from "./Category";
import data from "../../creator_data.json";
import Carousel from "./Carousel";

export default function WelcomePage() {
    const [cards, setCards] = useState([1]);
    useEffect(() => {
        let height = $(".card").height();
        let road = $(".animation_div").innerHeight() + height;
        let numOfCards = road / height;
        (road / height) % 2 == 0 ? '' :  numOfCards -= 1;
        let spaceBetween = (numOfCards % 1) * height / Math.round(numOfCards);
        let timerInterval = road / (road / 7);
        for(let i = 1; i < Math.floor(numOfCards) + 1;i++) {
            setCards(prev => ([
                ...prev,
                i
            ]))
        }

        function startAnimation() {
            $(".animation_div .card").each((ind, elem) => {
              setTimeout(() => {
                const interval = setInterval(() => {
                  const $card = $(elem);
                  const currentTop = parseInt($card.css("top"));
                  const newTop = currentTop + 1;
                  $card.css("top", `${newTop}px`);
          
                  if (newTop >= road) {
                    $card.css("top", `${-height}px`)
                  }
                }, timerInterval);
              }, ind * timerInterval * (height - spaceBetween));
            });
          }
        setTimeout(startAnimation, 300);
            // const elem = $(".animation_div .card:nth-of-type(1)");
            //     elem.css("top", parseInt(elem.css("top")) + 1 + "px");
            //     if(parseInt(elem.css("top")) > spaceBetween) {
            //         const elem2 =  $(".animation_div .card:nth-of-type(2)");
            //         elem2.css("top", parseInt(elem2.css("top")) + 1 + "px");
            //         if(parseInt(elem2.css("top")) > spaceBetween) {
            //             const elem3 =  $(".animation_div .card:nth-of-type(3)");
            //             elem3.css("top", parseInt(elem3.css("top")) + 1 + "px");
            //         }
            //     }
    }, []);
    return <main>
        <section id="welcome_section">
            <img src="./assets/welcome-1.png" alt="" />
            <img src="./assets/welcome-2.png" alt="" />
            <div className="gapped_container">
                <h1 className="top_hero">Buy and Sell<br />Digital Arts</h1>
                <p>The world's largest online marketplace of online digital art </p>
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
                {cards.map((elem,id) => {
                    return <Card key={id} />
                })}
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