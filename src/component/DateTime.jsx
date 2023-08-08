import React from 'react';
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const DateTime = ({dateTime}) => {
    const [time, setTime] = useState();
    const [date, setDate] =useState();

    const formatDateAndTime =(inputString) => {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
        const date = new Date(inputString);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const dayOfWeek = days[date.getDay()];
  
        const formattedDate = `${day}${getOrdinalSuffix(day)} ${months[month]} ${year}`;
        const formattedTime = `${hour % 12 === 0 ? 12 : hour % 12}:${minute.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
      
        setDate(formattedDate) 
        setTime(`${dayOfWeek} ${formattedTime}`)
      }
      function getOrdinalSuffix(number) {
        if (number >= 11 && number <= 13) {
          return 'th';
        }
        const lastDigit = number % 10;
        switch (lastDigit) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      }

useEffect(() => {
    if (dateTime) {
    formatDateAndTime(dateTime)
    }
},[dateTime]);

return (
<div>
    <div className=" pt-10 text-3xl">
            {time}
        </div>
        <div className="pt-10 text-3xl">
            {date}
        </div>
</div>
)
}
export default DateTime;