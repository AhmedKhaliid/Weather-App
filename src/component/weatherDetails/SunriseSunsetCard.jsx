/**
 *  README:
 *  - try not to repeat yourself
 *  - use clear names
 *  - follow naming conventions & proper letter casing
 *  - remove popTypes
 *
 */

/**
 *  TODO:
 *  []. update SunriseSunsetCard so that it
 *  only accepts this props <SunriseSunsetCard title={status} time={time}
 *  illustration={pic} /> and update the logic as needed (will discuss this
 *  more in our call)
 *  []. update methods and arguments names to follow naming conventions and best practices
 *  []. (Bonus) rename component SunriseSunsetCard is it would have a more
 *  generic and descriptive name
 */

import React from "react";
import AnalogClock from "analog-clock-react";

const SunriseSunsetCard = ({ weatherDate, sunrise, sunset, status, time, pic }) => {
  // set sunrise Time
  const sunriseTime = new Date(`${weatherDate} ${sunrise}`);
  const houreSunrise = sunriseTime.getHours();
  const minuteSunrise = sunriseTime.getMinutes();

  // sunsetProps or sunsetOptions or
  let optionrise = {
    seconds: minuteSunrise - 15,
    minutes: minuteSunrise,
    hours: houreSunrise,
  };

  // set sunset Time
  const sunsetTime = new Date(`${weatherDate} ${sunset}`);

  const houreSunset = sunsetTime.getHours();
  const minuteSunset = sunsetTime.getMinutes();

  // sunsetProps or sunsetOptions or
  let optionSunset = {
    seconds: minuteSunset - 15,
    minutes: minuteSunset,
    hours: houreSunset,
  };

  const clockOptions = status === "Sunrise" ? optionrise : optionSunset;

  return (
    <div className=" text-center">
      <p className="text-2xl pb-6">{status}</p>
      <div className="w-36 h-72 rounded-50px bg-sunriseSet flex flex-col items-center justify-end pb-5">
        <div className=" pb-7">
          <AnalogClock
            useCustomTime
            width="100px"
            baseColor="transparent"
            handColors={{
              second: "rgba(255, 0, 0, 1)",
              minute: "rgba(79, 79, 79, 1)",
              hour: "rgba(0, 56, 255, 1)",
            }}
            {...clockOptions}
          />
        </div>
        <p className="text-lg">{time}</p>
        <img src={pic} alt="" width="90px" height="60px" />
      </div>
    </div>
  );
};

// TODO: proptypes package
// https://www.npmjs.com/package/prop-types

// SunriseSunsetCard.propTypes = {
//   status: Propt,
// };

export default SunriseSunsetCard;
