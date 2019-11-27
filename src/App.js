import React from 'react';
import SearchForm from './components/SearchForm';
import StatisticsPanel from './components/StatisticsPanel'
import WeatherTracker from './WeatherTracker';
import { getNewTrackers } from './trackers'
import { fetchWeather } from './weatherData'
import { hasGotRequiredFields } from './dataValidation'

class App extends React.Component {
  state = {
    dayTracker: new WeatherTracker(),
    nightTracker: new WeatherTracker(),
    humidity: new WeatherTracker(),
  };

  onGetData = (weatherLocation) => {
    fetchWeather(weatherLocation).then((result) => {
      if (hasGotRequiredFields(result)) {
        this.recreateTrackers(result);
      }
    })
  } 

  recreateTrackers = (data) => {
    const newTrackers = getNewTrackers(data);
    this.setState({ 
      ...newTrackers
    })
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.onGetData} />
        <StatisticsPanel {...this.state}/>
      </div>
    );
  }

}

export default App;
