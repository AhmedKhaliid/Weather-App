import React, { useEffect, useState } from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";
import SwitchButton from "./SwitchButton";
import ThreeWeatherElements from "./ThreeWeatherElements";
import { BiRightArrow } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { BsCloudRain } from "react-icons/bs";
import NextDayWeather from "./NextDayWeather";
import moment from "moment/moment";

const WeatherView = ({ weather, timeDate, allWeekWeather }) => {
  WeatherView.propTypes;

  const [threeElementsArray, setThreeElementsArray] = useState([]);
  const [tempCelsius, setTempCelsius] = useState(true);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (weather) {
      setThreeElementsArray([
        { status: "Wind", num: weather.wind, icon: <BiRightArrow /> },
        { status: "Hum", num: weather.hum, icon: <WiHumidity /> },
        { status: "Rain", num: weather.rain, icon: <BsCloudRain /> },
      ]);
    }
  }, [weather]);
  useEffect(() => {
    if (timeDate) {
      setTime(moment(timeDate).format("dddd h:mm a"));
      setDate(moment(timeDate).format("Do MMM YYYY"));
    }
  }, [timeDate]);

  return (
    <div className="flex-1 flex flex-col ">
      <div className="pl-6 pr-6 w-full">
        <div className="flex justify-between items-center">
          <img src={`${weather.icon}`} alt="" className=" w-28 h-28"></img>
          <SwitchButton
            onSwitch={() => setTempCelsius((current) => !current)}
            tempCelsius={tempCelsius}
          />
        </div>
      </div>
      <div className="pl-12 ">
        <div className="text-6xl font-thin tracking-widest">
          {tempCelsius && (
            <div className="flex">
              {weather.temp}
              <RiCelsiusFill />{" "}
            </div>
          )}
          {!tempCelsius && (
            <div className="flex">
              {weather.tempF}
              <RiFahrenheitFill />
            </div>
          )}
        </div>
        <div className=" pt-10 text-3xl">{time}</div>
        <div className="pt-10 text-3xl">{date}</div>
        <ThreeWeatherElements threeElementsArray={threeElementsArray} />
        <NextDayWeather
          allWeekWeather={allWeekWeather}
          tempCelsius={tempCelsius}
        />
      </div>
    </div>
  );
};
export default WeatherView;
