import React, { useEffect, useState } from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";
import SwitchButton from "./SwitchButton";
import WeatherStats from "./WeatherStats";

import NextDayWeather from "./NextDayWeather";
import moment from "moment/moment";

const WeatherView = ({ weather, timeDate, allWeekWeather }) => {
  // const [threeElementsArray, setThreeElementsArray] = useState([]);
  const [isCelsius, setTempCelsius] = useState(true);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  // TODO: remove useEffect
  useEffect(() => {
    if (timeDate) {
      const date = new Date(timeDate);
      // TODO: (Bonus) replace moment use with vanilla js
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
      // https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

      setTime(moment(date).format("dddd h:mm a"));
      setDate(moment(date).format("Do MMM YYYY"));
    }
  }, [timeDate]);

  return (
    <div className="flex-1 flex flex-col ">
      <div className="pl-6 pr-6 w-full">
        <div className="flex justify-between items-center">
          <img src={`${weather.icon}`} alt="" className=" w-28 h-28" />
          <SwitchButton
            onSwitch={() => setTempCelsius((current) => !current)}
            tempCelsius={isCelsius}
          />
        </div>
      </div>
      <div className="pl-12 ">
        <div className="text-6xl font-thin tracking-widest">
          {isCelsius ? (
            <div className="flex">
              {weather.temp}
              <RiCelsiusFill />{" "}
            </div>
          ) : (
            <div className="flex">
              {weather.tempF}
              <RiFahrenheitFill />
            </div>
          )}
        </div>
        <div className=" pt-10 text-3xl">{time}</div>
        <div className="pt-10 text-3xl">{date}</div>
        <WeatherStats weather={weather} />
        <NextDayWeather allWeekWeather={allWeekWeather} tempCelsius={isCelsius} />
      </div>
    </div>
  );
};
export default WeatherView;
