import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import NextDayWeatherCard from "./NextDayWeatherCard";

const NextDayWeather = ({ allWeekWeather, tempCelsius }) => {
  NextDayWeather.propTypes;
  const forward = useRef();
  const [forwardArrow, setForwardArrow] = useState(true);
  const [backwardArrow, setBackwardArrow] = useState(false);
  const [moreThanThreeDays, setMoreThanThreeDays] = useState(false);

  useEffect(() => {
    if (forward.current) {
      if (forward.current.scrollWidth > forward.current.clientWidth) {
        setMoreThanThreeDays(true);
      }
    }
  }, [forward.current]);

  const scrollRight = () => {
    forward.current.scrollLeft += 468;
    const maxScrollLeft =
      forward.current.scrollWidth - forward.current.clientWidth;
    const isScrollingNearRight =
      forward.current.scrollLeft >= maxScrollLeft - 468;
    if (isScrollingNearRight) {
      setForwardArrow(false);
      setBackwardArrow(true);
    }
    setBackwardArrow(true);
  };

  const scrollLeft = () => {
    forward.current.scrollLeft -= 468;
    const isScrollingNearRight =
      forward.current.scrollLeft <= forward.current.clientWidth + 28;
    if (isScrollingNearRight) {
      setBackwardArrow(false);
      setForwardArrow(true);
    }
    setForwardArrow(true);
  };

  return (
    <div className="flex">
      {moreThanThreeDays && (
        <div className="w-10 h-52 mt-16 flex items-center justify-center ">
          {backwardArrow && (
            <IoIosArrowBack
              onClick={scrollLeft}
              className=" cursor-pointer"
              size={60}
            />
          )}
        </div>
      )}

      <NextDayWeatherCard
        allWeekWeather={allWeekWeather}
        tempCelsius={tempCelsius}
        ref={forward}
      />

      {moreThanThreeDays && (
        <div className="w-10 h-52 mt-16 flex items-center justify-center">
          {forwardArrow && (
            <IoIosArrowForward
              onClick={scrollRight}
              className=" cursor-pointer"
              size={60}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default NextDayWeather;
