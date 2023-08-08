import React, { forwardRef} from 'react';
import {RiCelsiusFill} from "react-icons/ri";
import {RiFahrenheitFill} from "react-icons/ri";


// eslint-disable-next-line react/display-name
const NextDayWeatherCard = forwardRef(({allWeekWeather,tempCelsius},ref) => {
    NextDayWeatherCard.propTypes; 
    
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
const getDayFn = (fullDate) => {
    const date = new Date (fullDate)
    const dayOfWeek = days[date.getDay()];
return dayOfWeek;
}

    return  <div  className='flex space-x-7 w-450px overflow-x-hidden items-center ' >
        {allWeekWeather.map((all) => {
       return  <div ref={element => {
        if(element) {
          ref.current[all.id] = element
        } else {
          delete ref.current[all.id]
        }} }key={all.id} className='flex flex-col items-center justify-between p-6  mt-16 w-32 h-52 rounded-3xl bg-nextDayCard'>
       {tempCelsius && <div className='flex space-x-1 items-center'>
       <p className='text-2xl'>{all.temp}</p>
        <RiCelsiusFill />
        </div>}
        {!tempCelsius && <div className='flex space-x-1 items-center'>
       <p className='text-2xl'>{all.tempF}</p>
        <RiFahrenheitFill />
        </div>}
        <img src={all.icon} alt='' width='80px' height='50px' />
       <p className='text-2xl'>{getDayFn(all.date)}</p> 
    </div>
     })}
    </div>
})
export default NextDayWeatherCard;

