/**
 *  README:
 *  - try to decouple your logic
 *  - try not to repeat yourself
 *  - use clear names
 *  - follow naming conventions & proper letter casing
 *  - remove popTypes
 *  - don't duplicate imports
 *
 */

/**
 *  TODO:
 *  []. remove the useEffect as its not necessary here and adjust the logic as
 *  needed
 */

import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import SunriseSunsetInfo from "./SunriseSunsetInfo";
import { useEffect } from "react";
import { useState } from "react";
import sunrisePic from "../../image/sunrise.png";
import sunsetPic from "../../image/sunset.png";
import WeatherElementsView from "./WeatherElementsView";

const WeatherDetails = ({ countries, onChange, weather, isLoading, inputCountry }) => {
  WeatherDetails.propTypes;
  const [sunriseSunsetObj, setSunriseSunsetObj] = useState({});
  const [weatherElemntsObj, setWeatherElementsObj] = useState({});
  useEffect(() => {
    if (weather) {
      setSunriseSunsetObj({
        sunrise: "Sunrise",
        sunriseTime: weather.sunrise,
        sunrisePic: sunrisePic,
        sunset: "Sunset",
        sunsetTime: weather.sunset,
        sunsetPic: sunsetPic,
      });

      setWeatherElementsObj({
        avgHum: "Average Humidity",
        humPercentage: weather.avgHum,
        rain: "Chance of rain",
        rainPercentage: weather.rain,
        sign: "%",
      });
    }
  }, [weather]);

  return (
    <div className=" bg-countryInputBG w-576px h-full pt-10  m-0 flex flex-col space-x-1 font-normal ">
      <div className="flex items-center h-fit pl-3">
        <IoLocationOutline className="animate-pulse" size={30} />
        <input
          disabled={isLoading ? true : false}
          className=" w-60 h-9 text-center bg-gray-500 bg-opacity-20"
          placeholder={inputCountry}
          type="text"
          list="countries"
          onChange={onChange}
        />
        <datalist id="countries">
          {countries.map((cntry) => {
            return <option key={cntry} value={cntry} />;
          })}
        </datalist>
      </div>
      <SunriseSunsetInfo
        weatherDate={weather.date}
        sunriseSunsetObj={sunriseSunsetObj}
        sunrise={weather.sunrise}
        sunset={weather.sunset}
      />
      <div className="flex justify-center items-center space-x-2">
        <div className="border-b-2 w-96 mt-12 border-white/[0.26]" />
        <div className=" text-center w-10 h-10 text-3xl italic font-bold rounded-full mt-11 bg-white/[0.26]">
          <p>i</p>
        </div>
      </div>
      <WeatherElementsView weatherElemntsObj={weatherElemntsObj} weatherWind={weather.maxWind} />
    </div>
  );
};
export default WeatherDetails;
