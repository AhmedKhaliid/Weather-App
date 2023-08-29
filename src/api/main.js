// TODO:  Follow naming conventions
//  read: https://www.robinwieruch.de/javascript-naming-conventions/
// read: https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a/

// camelCase
// PascalCase
// CONSTANT_CASE

// getCountriesNames
export const countriesName = () =>
  fetch("https://restcountries.com/v3/all").then((res) => res.json());

// getCountryForecast
export const forecast = (inputCountry) =>
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=00b19135027849b699d155555232907&q=${inputCountry}&days=10&aqi=no&alerts=no`,
  ).then((res) => res.json());
