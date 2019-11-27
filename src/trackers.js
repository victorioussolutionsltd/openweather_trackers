import WeatherTracker from './WeatherTracker';

const isItDayTime = (day) => day.sys.pod === 'd';

export const getNewTrackers = (data) => {
  const newDayTracker = new WeatherTracker();
  const newNightTracker = new WeatherTracker();
  const newHumidity = new WeatherTracker();

  data.list.forEach((measurement) => {
    const newTemperature = measurement.main.temp;
    isItDayTime(measurement) ? newDayTracker.Value = newTemperature : newNightTracker.Value = newTemperature;
    newHumidity.Value = measurement.main.humidity;
  });

  return {
    dayTracker: newDayTracker,
    humidity: newHumidity,
    nightTracker: newNightTracker,
  };
};
