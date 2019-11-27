import { mode } from './mathHelpers';

class WeatherTracker {
  constructor() {
    this.values = [];
  }

  set Value(value) {
    this.values = [...this.values, value];
  }

  get Min() {
    return Math.min(...this.values);
  }

  get Max() {
    return Math.max(...this.values);
  }

  get Mean() {
    const sum = this.values.reduce((previous, current) => (current + previous), 0);
    if (this.values.length > 0) return (sum / this.values.length);

    return null;
  }

  get Mode() {
    return mode(this.values);
  }
}

export default WeatherTracker;
