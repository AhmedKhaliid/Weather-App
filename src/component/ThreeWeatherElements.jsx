import React from 'react';

 
const ThreeWeatherElements = ({threeElementsArray}) => {
    ThreeWeatherElements.propTypes;


    return <div className="pt-10 flex text-sm space-x-5">
        {threeElementsArray.map((ele,index) => {

 return   <div key={Math.random()} className=" pt-10 flex space-x-1 items-center">
      {ele.icon}
      <div className='flex space-x-4'>
        <p> {ele.status}</p>
        <p>{ele.num} {ele.status === 'Wind'? 'K/H': "%"}</p>
        </div>
      {index < threeElementsArray.length -1 ?<p className='pl-4'>|</p> : '' }  
    </div>
    })}
</div>
}
export default ThreeWeatherElements;