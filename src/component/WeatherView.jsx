import React, { useEffect, useState } from 'react';
import {RiCelsiusFill} from "react-icons/ri"
import DateTime from "./DateTime";
import {RiFahrenheitFill} from "react-icons/ri";
import SwitchButton from './SwitchButton';
import ThreeWeatherElements from './ThreeWeatherElements';
import {BiRightArrow} from 'react-icons/bi';
import {WiHumidity} from 'react-icons/wi';
import {BsCloudRain} from 'react-icons/bs';
import NextDayWeather from './NextDayWeather';

 
const WeatherView = ({weather,timeDate,allWeekWeather}) => {
WeatherView.propTypes;

const [threeElementsArray, setThreeElementsArray] = useState([]);
const [tempCelsius, setTempCelsius] = useState(true);

useEffect(()=> {
    if(weather) {
        setThreeElementsArray([{status:'Wind',num:weather.wind,icon: <BiRightArrow />},{status:'Hum',num:weather.hum,icon: <WiHumidity />},{status:'Rain',num:weather.rain, icon: <BsCloudRain />}])
    }
},[weather])

    return <div className='flex-1 flex flex-col '>
    <div className="pl-6 pr-6 w-full">  
    <div className='flex justify-between items-center'>
<img src={`${weather.icon}`} alt="" className=" w-28 h-28"></img>
<SwitchButton onSwitch={() => setTempCelsius(current => !current)} tempCelsius={tempCelsius} />
</div>
</div>
<div className="pl-12 ">
<div className="text-6xl font-thin tracking-widest">
        {tempCelsius && <div className='flex'>
        {weather.temp }
        <RiCelsiusFill /> </div> }
        {!tempCelsius && <div className='flex'>
        {weather.tempF}
        <RiFahrenheitFill /></div>}
</div>
<DateTime dateTime={timeDate} />
<ThreeWeatherElements threeElementsArray={threeElementsArray}/>
<NextDayWeather allWeekWeather={allWeekWeather} tempCelsius={tempCelsius} />
</div>

</div>
}
export default WeatherView;