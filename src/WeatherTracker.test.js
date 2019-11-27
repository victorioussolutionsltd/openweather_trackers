import WeatherTracker from './WeatherTracker';

it('should return 10 for an array with one element', () => {
  const tracker = new WeatherTracker();
  tracker.Value = 10;
  expect(tracker.Mean).toEqual(10);
});

it('should return 15', () => {
  const tracker = new WeatherTracker();
  tracker.Value = 14;
  tracker.Value = 16;
  expect(tracker.Mean).toEqual(15);
});
