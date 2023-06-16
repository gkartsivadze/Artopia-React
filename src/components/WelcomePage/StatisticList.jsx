import React from "react";
import CountUp from "react-countup";

export default function StatisticList() {

  return (
    <div className="statistic_list">
      <div className="statistic_component">
        <h4><CountUp start={0} end={2000} duration={3} separator="," ></CountUp></h4>
        <p className="text_color_an">Digital art file</p>
      </div>
      <div className="statistic_component">
        <h4><CountUp start={0} end={999000} duration={5} separator="," ></CountUp></h4>
       
        <p className="text_color_an">Art Seller</p>
      </div>
      <div className="statistic_component">
        <h4><CountUp start={0} end={1000} duration={2} separator="," ></CountUp></h4>
        <p className="text_color_an">Buyer</p>
      </div>
    </div>
  );
}