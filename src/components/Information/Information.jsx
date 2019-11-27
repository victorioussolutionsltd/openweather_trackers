import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import WeatherTracker from '../../WeatherTracker';
import { valueOrUnknown } from './displayHelpers';

class Information extends React.Component {
  render() {
    const { tracker } = this.props;
    const {
      Min, Max, Mean, Mode,
    } = tracker;

    return (
      <>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Min:
              {' '}
              {valueOrUnknown(Min)}
            </Typography>
            <Typography variant="h5" component="h2">
              Max:
              {' '}
              {valueOrUnknown(Max)}
            </Typography>
            <Typography variant="h5" component="h2">
              Mean:
              {' '}
              {valueOrUnknown(Mean) }
            </Typography>
            <Typography variant="h5" component="h2">
              Mode:
              {' '}
              {valueOrUnknown(Mode.join(', '))}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
}
Information.propTypes = {
  tracker: PropTypes.instanceOf(WeatherTracker).isRequired,
};

export default Information;
