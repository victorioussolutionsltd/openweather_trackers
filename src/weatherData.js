const APIKEY_ENV = '553173bd418ce8da927efd016c2588ec';

export const fetchWeather = (weatherGeoLocation) => {
  const { city, country } = weatherGeoLocation;

  return new Promise((resolve, reject) => {
    const API = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&cnt=5&appid=${APIKEY_ENV}`;
    fetch(API).then((results) => resolve(results.json())).catch((Error) => {
      console.log(Error);
      reject(Error);
    });
  });
};
