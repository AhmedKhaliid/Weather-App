/**
 *  README:
 *  - try not to repeat yourself
 *  - use clear names
 *  - remove popTypes
 *
 */

import React from "react";
import { BsWind } from "react-icons/bs";

const WeatherElementsView = ({ weatherElemntsObj, weatherWind }) => {
  return (
    <div>
      <div className="flex justify-between mt-5 pr-10 pl-10 font-extralight text-3xl">
        <ContentView title={weatherElemntsObj.avgHum} value={weatherElemntsObj.humPercentage} />

        <ContentView
          title={weatherElemntsObj.rain}
          value={`${weatherElemntsObj.rainPercentage} ${weatherElemntsObj.sign}`}
        />
      </div>
      <div className="mt-8 mb-5 font-extralight text-3xl flex flex-col items-center">
        <p>Max.Wind speed</p>
        <div className="flex items-center space-x-6">
          <p>{weatherWind} </p>
          <div className="flex items-center space-x-3">
            <p> km/h</p>
            <BsWind />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherElementsView;

// const WeatherItem = ({ title, value }) => {
const ContentView = ({ title, value }) => {
  return (
    <div className=" flex flex-col items-center">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};
