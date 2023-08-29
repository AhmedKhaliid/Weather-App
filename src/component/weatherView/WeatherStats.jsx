import React from "react";

import { BiRightArrow } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { BsCloudRain } from "react-icons/bs";

const WeatherStats = ({ weather }) => {
  const weatherStatsData = [
    { status: "Wind", num: weather?.wind, icon: <BiRightArrow /> },
    { status: "Hum", num: weather?.hum, icon: <WiHumidity /> },
    { status: "Rain", num: weather?.rain, icon: <BsCloudRain /> },
  ];

  return (
    <div className="pt-10 flex text-sm space-x-5">
      {weatherStatsData.map((weatherElement, index) => (
        <React.Fragment key={weatherElement.status}>
          <WeatherStatView data={weatherElement} />
          {index < weatherStatsData.length - 1 && <p className="pl-4">|</p>}
        </React.Fragment>
      ))}
    </div>
  );
};
export default WeatherStats;

function WeatherStatView({ data }) {
  return (
    <div className=" pt-10 flex space-x-1 items-center">
      {data.icon}
      <div className="flex space-x-4">
        <p> {data.status}</p>
        <p>
          {data.num} {data.status === "Wind" ? "K/H" : "%"}
        </p>
      </div>
    </div>
  );
}
