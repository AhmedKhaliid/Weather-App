/**
 *  README:
 *  - try not to repeat yourself
 *  - don't duplicate imports
 *  - follow naming conventions & proper letter casing
 *  - remove popTypes
 *
 */

/**
 *  TODO:
 *  []. update getDayFn method so that it uses native javascript instead of
 *  moment. check Date.toLocaleDateString docs for help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
 *  []. remove moment package from the app (npm uninstall moment)
 *  []. remove duplicated imports
 *  []. update names to be clearer and follow better naming conventions
 */

import React, { forwardRef } from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";
import moment from "moment";

// eslint-disable-next-line react/display-name
const NextDayWeatherCard = forwardRef(({ allWeekWeather, tempCelsius }, ref) => {
  NextDayWeatherCard.propTypes;

  const getDayFn = (fullDate) => {
    const day = moment(fullDate).format("dddd");
    return day;
  };

  return (
    <div ref={ref} className="flex space-x-7 w-440px overflow-x-hidden scroll-smooth items-center ">
      {allWeekWeather.map((all) => {
        return (
          <div
            key={all.id}
            className="flex flex-col items-center justify-between p-6  mt-16 min-w-minWidth max-w-maxWidth h-52 rounded-3xl bg-nextDayCard"
          >
            {/* TODO: use ternary operator  */}
            {tempCelsius && (
              <div className="flex space-x-1 items-center">
                <p className="text-2xl">{all.temp}</p>
                <RiCelsiusFill />
              </div>
            )}
            {!tempCelsius && (
              <div className="flex space-x-1 items-center">
                <p className="text-2xl">{all.tempF}</p>
                <RiFahrenheitFill />
              </div>
            )}
            <img src={all.icon} alt="" width="80px" height="50px" />
            <p className="text-2xl">{getDayFn(all.date)}</p>
          </div>
        );
      })}
    </div>
  );
});
export default NextDayWeatherCard;
