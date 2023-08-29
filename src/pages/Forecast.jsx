import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import WeatherDetails from "../component/weatherDetails/WeatherDetails";
// don't duplicate imports
import { countriesName } from "../api/main";
import { forecast } from "../api/main";
import WeatherView from "../component/weatherView/WeatherView";
import loadingImg from "../image/loadingImg.png";

const Forecast = () => {
  const [countries, setCountries] = useState([]);
  const [inputCountry, setInputCountry] = useState("Egypt, Cairo");
  const [timeDate, setTimeDate] = useState("");
  const [allWeekWeather, setAllWeekWeather] = useState([]);

  // get country

  const { data: country } = useQuery({
    queryKey: ["countriesNames"],
    queryFn: countriesName,
  });
  // why useEffect?
  useEffect(() => {
    if (country) {
      const countryNames = country.map((country) => `${country.name.common}, ${country.capital}`);
      setCountries(countryNames);
    }
  }, [country]);

  // get weather
  const {
    data: weather,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["forecast", inputCountry],
    queryFn: () => forecast(inputCountry),
    select: (weatherData) => {
      return {
        country: weatherData.location.country,
        id: weatherData.location.country,
        city: weatherData["location"]["name"],
        temp: weatherData["current"]["feelslike_c"],
        tempF: weatherData["current"]["feelslike_f"],
        icon: weatherData["current"]["condition"]["icon"],
        time: weatherData["location"]["localtime"],
        wind: weatherData["current"]["wind_kph"],
        hum: weatherData["current"]["humidity"],
        date: weatherData["forecast"]["forecastday"][0]["date"],
        maxWind: weatherData["forecast"]["forecastday"][0]["day"]["maxwind_kph"],
        avgHum: weatherData["forecast"]["forecastday"][0]["day"]["avghumidity"],
        rain: weatherData["forecast"]["forecastday"][0]["day"]["daily_chance_of_rain"],
        sunrise: weatherData["forecast"]["forecastday"][0]["astro"]["sunrise"],
        sunset: weatherData["forecast"]["forecastday"][0]["astro"]["sunset"],
        forecast: weatherData["forecast"]["forecastday"],
      };
    },
  });

  useEffect(() => {
    if (weather) {
      const nextDayWeather = [];
      for (let i = 1; i < weather.forecast.length; i++) {
        nextDayWeather.push({
          id: i,
          date: weather.forecast[i]["date"],
          temp: weather.forecast[i]["day"]["avgtemp_c"],
          tempF: weather.forecast[i]["day"]["avgtemp_f"],
          icon: weather.forecast[i]["day"]["condition"]["icon"],
        });
        setAllWeekWeather(nextDayWeather);
      }
      // setWeather();
    }
  }, [weather]);

  // // setInterval(()=> {refetch()},60000)

  useEffect(() => {
    if (weather) {
      setTimeDate(weather["time"]);
    }
  }, [weather]);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-slate-100/[0.5] flex flex-col justify-center items-center">
        <img src={loadingImg} alt="" className="w-20 h-20" />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen bg-slate-100/[0.5] flex flex-col justify-center items-center">
        <img src={loadingImg} alt="" className="w-20 h-20" />
        <p>An error has occurred: {error.message}</p>
      </div>
    );
  }

  const handleCountryChange = (event) => {
    if (countries.includes(event.target.value)) {
      setInputCountry(event.target.value);
    }
  };

  return (
    <div className="sm:flex-col md:flex-row sm:items-center md:items-start  flex sm:space-y-8 md:space-y-0 md:justify-between w-full h-full ">
      <WeatherView weather={weather} timeDate={timeDate} allWeekWeather={allWeekWeather} />

      <WeatherDetails
        isLoading={isLoading}
        inputCountry={inputCountry}
        weather={weather}
        countries={countries}
        onChange={handleCountryChange}
      />
    </div>
  );
};
export default Forecast;
