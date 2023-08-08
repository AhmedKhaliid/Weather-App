import React, { useState,useRef } from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io'
import NextDayWeatherCard from './NextDayWeatherCard';

const NextDayWeather = ({allWeekWeather,tempCelsius}) => {
    NextDayWeather.propTypes;
    const forward = useRef({});
    const [forwardArrow, setForwardArrow] = useState(true);
    const [backwardArrow, setBackwardArrow] = useState(false);
    const [forwardNo, setForwardNo] = useState(6);
    
    
const handleClickForward = () => {
  setBackwardArrow(true);
if (allWeekWeather.length <= forwardNo) {
  forward.current[allWeekWeather.length]?.scrollIntoView({inline: "end",behavior: 'smooth' });
  setForwardArrow(false);
}else {
  forward.current[forwardNo]?.scrollIntoView({inline: "end",behavior: 'smooth' });
  setForwardNo(old => old +3)
}
  };
const handleClickBackward = () => {
  forward.current[forwardNo-3]?.scrollIntoView({ inline: "end",behavior: 'smooth' });
  setForwardArrow(true)
  setForwardNo(old => old - 3)
    if (forwardNo-3 === 3) {
      setBackwardArrow(false);
     setForwardNo(6)
    }
}

return <div className='flex'>
        <div className='w-10 h-52 mt-16 flex items-center justify-start '>
        {backwardArrow && <IoIosArrowBack onClick={handleClickBackward}  className=' cursor-pointer' size={60} />}
        </div>

<NextDayWeatherCard allWeekWeather={allWeekWeather} tempCelsius={tempCelsius} ref={forward} />
    
    <div className='w-10 h-52 mt-16 flex items-center justify-start'>
    {forwardArrow && <IoIosArrowForward onClick={handleClickForward}  className=' cursor-pointer' size={60}/>}
     </div>
    </div>
}
export default NextDayWeather;