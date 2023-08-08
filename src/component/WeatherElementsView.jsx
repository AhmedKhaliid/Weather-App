import React from 'react';
import {BsWind} from "react-icons/bs"

const WeatherElementsView = ({weatherElemntsObj,weatherWind}) => {
    WeatherElementsView.propTypes;

    return <div>
        <div  className='flex justify-between mt-5 pr-10 pl-10 font-extralight text-3xl'>
        <WeatherElementsViewUI status={weatherElemntsObj.avgHum} 
        percentage={weatherElemntsObj.humPercentage} 
        sign={weatherElemntsObj.sign} />

<WeatherElementsViewUI status={weatherElemntsObj.rain} 
        percentage={weatherElemntsObj.rainPercentage} 
        sign={weatherElemntsObj.sign} />
</div>
<div className='mt-8 mb-5 font-extralight text-3xl flex flex-col items-center'>
    <p>Max.Wind speed</p>
    <div className='flex items-center space-x-6'>
     <p>{weatherWind} </p>
     <div className='flex items-center space-x-3'>
     <p> km/h</p>
      <BsWind />
      </div>
     </div>
</div>
</div>
}
export default WeatherElementsView;

const WeatherElementsViewUI = ({status,percentage,sign}) => {
    WeatherElementsViewUI.propTypes;

    return <div className=' flex flex-col items-center'>
    <p>{status}</p>
     <p>{percentage}{sign}</p>
 </div>
}