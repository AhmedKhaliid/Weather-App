

export const countriesName =  () =>
 fetch('https://restcountries.com/v3/all').then(
 (res) => res.json(),
)

export const forecast = (inputCountry) =>
fetch(`http://api.weatherapi.com/v1/forecast.json?key=00b19135027849b699d155555232907&q=${inputCountry}&days=8&aqi=no&alerts=no`).then(
(res) => res.json(),
)