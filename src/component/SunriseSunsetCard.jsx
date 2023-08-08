import React from 'react';
import AnalogClock from "analog-clock-react";

const SunriseSunsetCard = ({weatherDate,sunrise,sunset,status,time,pic}) => {
    SunriseSunsetCard.propTypes


// set sunrise Time
const sunriseTime = new Date(`${weatherDate} ${sunrise}`);
const houreSunrise = sunriseTime.getHours();
const minuteSunrise = sunriseTime.getMinutes();

    let optionrise = {
        useCustomTime: true,    
        width: "100px",
       baseColor: 'transparent' ,
        handColors: {
          second: "rgba(255, 0, 0, 1)",
          minute: "rgba(79, 79, 79, 1)",
          hour: "rgba(0, 56, 255, 1)"
        },
        "seconds": minuteSunrise - 15 ,   
        "minutes": minuteSunrise,  
        "hours": houreSunrise    
    };

   // set sunset Time
    const sunsetTime = new Date(`${weatherDate} ${sunset}`);
const houreSunset = sunsetTime.getHours();
const minuteSunset = sunsetTime.getMinutes();

    let optionSunset = {
        useCustomTime: true,    
        width: "100px",
       baseColor: 'transparent' ,
        handColors: {
            second: "rgba(255, 0, 0, 1)",
            minute: "rgba(79, 79, 79, 1)",
            hour: "rgba(0, 56, 255, 1)"
        },
        "seconds": minuteSunset - 15 ,   
        "minutes": minuteSunset,  
        "hours": houreSunset    
    };


return <div  className=' text-center'>
<p className='text-2xl pb-6'>{status}</p>
<div className='w-36 h-72 rounded-50px bg-sunriseSet flex flex-col items-center justify-end pb-5'>
<div className=' pb-7'>
    {status === 'Sunrise'? <AnalogClock {...optionrise}/>: <AnalogClock {...optionSunset}/>}
</div>
<p className='text-lg'>{time}</p>
<img src={pic} alt='' width='90px' height='60px' />
</div>
</div>
}
export default SunriseSunsetCard;