import React from "react";
import SunriseSunsetCard from "./SunriseSunsetCard";

const SunriseSunsetInfo = ({ weatherDate, sunrise, sunset, sunriseSunsetObj }) => {
  return (
    <div className="flex justify-between pt-14 pl-8 pr-8">
      <SunriseSunsetCard
        weatherDate={weatherDate}
        sunrise={sunrise}
        status={sunriseSunsetObj.sunrise}
        time={sunriseSunsetObj.sunriseTime}
        pic={sunriseSunsetObj.sunrisePic}
      />
      <SunriseSunsetCard
        weatherDate={weatherDate}
        sunset={sunset}
        status={sunriseSunsetObj.sunset}
        time={sunriseSunsetObj.sunsetTime}
        pic={sunriseSunsetObj.sunsetPic}
      />
    </div>
  );
};
export default SunriseSunsetInfo;
