import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import WeatherDetails from "../component/weatherDetails/WeatherDetails";
import { countriesName } from "../api/main";
import { forecast } from "../api/main";
import WeatherView from "../component/weatherView/WeatherView";
import loadingImg from "../image/loadingImg.png";

const Forecast = () => {
  const [countries, setCountries] = useState([]);
  const [inputCountry, setInputCountry] = useState("Egypt, Cairo");
  const [weather, setWeather] = useState({});
  const [timeDate, setTimeDate] = useState("");
  const [allWeekWeather, setAllWeekWeather] = useState([]);

  // get country

  const { data: country } = useQuery({
    queryKey: ["repoData"],
    queryFn: countriesName,
  });
  useEffect(() => {
    if (country) {
      const countryNames = country.map(
        (country) => `${country.name.common}, ${country.capital}`
      );
      setCountries(countryNames);
    }
  }, [country]);

  // get weather
  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["repoData2", inputCountry],
    queryFn: () => forecast(inputCountry),
  });
  useEffect(() => {
    if (weatherData) {
      const nextDayWeather = [];
      for (let i = 1; i < weatherData["forecast"]["forecastday"].length; i++) {
        nextDayWeather.push({
          id: i,
          date: weatherData["forecast"]["forecastday"][i]["date"],
          temp: weatherData["forecast"]["forecastday"][i]["day"]["avgtemp_c"],
          tempF: weatherData["forecast"]["forecastday"][i]["day"]["avgtemp_f"],
          icon: weatherData["forecast"]["forecastday"][i]["day"]["condition"][
            "icon"
          ],
        });
        setAllWeekWeather(nextDayWeather);
      }
      setWeather({
        id: Math.random().toString(),
        country: weatherData["location"]["country"],
        city: weatherData["location"]["name"],
        temp: weatherData["current"]["feelslike_c"],
        tempF: weatherData["current"]["feelslike_f"],
        icon: weatherData["current"]["condition"]["icon"],
        time: weatherData["location"]["localtime"],
        date: weatherData["forecast"]["forecastday"][0]["date"],
        wind: weatherData["current"]["wind_kph"],
        maxWind:
          weatherData["forecast"]["forecastday"][0]["day"]["maxwind_kph"],
        hum: weatherData["current"]["humidity"],
        avgHum: weatherData["forecast"]["forecastday"][0]["day"]["avghumidity"],
        rain: weatherData["forecast"]["forecastday"][0]["day"][
          "daily_chance_of_rain"
        ],
        sunrise: weatherData["forecast"]["forecastday"][0]["astro"]["sunrise"],
        sunset: weatherData["forecast"]["forecastday"][0]["astro"]["sunset"],
      });
    }
  }, [weatherData]);
  // setInterval(()=> {refetch()},60000)

  useEffect(() => {
    if (weather) {
      setTimeDate(weather["time"]);
    }
  }, [weather]);

  return (
    <>
      {isLoading && (
        <div className="w-full h-screen bg-slate-100/[0.5] flex flex-col justify-center items-center">
          <img src={loadingImg} alt="" className="w-20 h-20" />
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div className="w-full h-screen bg-slate-100/[0.5] flex flex-col justify-center items-center">
          <img src={loadingImg} alt="" className="w-20 h-20" />
          <p>An error has occurred: {error.message}</p>
        </div>
      )}
      {!isLoading && !error && (
        <div className="sm:flex-col md:flex-row sm:items-center md:items-start  flex sm:space-y-8 md:space-y-0 md:justify-between w-full h-full ">
          <WeatherView
            weather={weather}
            timeDate={timeDate}
            allWeekWeather={allWeekWeather}
          />

          <WeatherDetails
            isLoading={isLoading}
            inputCountry={inputCountry}
            weather={weather}
            countries={countries}
            onChange={(event) => {
              if (countries.includes(event.target.value)) {
                setInputCountry(event.target.value);
              }
            }}
          />
        </div>
      )}
    </>
  );
};
export default Forecast;
