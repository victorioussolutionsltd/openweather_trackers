import React from 'react';
import { FormControl,Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import style from './style';
import WeatherTracker from '../../WeatherTracker';
import Information from './../Information';

const TAB_INDEX = {
    DAY : 0,
    NIGHT : 1,
    HUMIDITY: 2
};

class StatisticsPanel extends React.Component {

    state = { tracker: TAB_INDEX.DAY }

    changeTracker = (event, newValue) => {
        this.setState({ tracker: newValue });
    };

  render() {
      const { 
      dayTracker,
      nightTracker,
      humidity,
      classes } = this.props;
      const { tracker } = this.state;

      return (
      <div className={classes.container}>
      <div>
      <Tabs
      value={tracker}
      indicatorColor="primary"
      textColor="primary"
      onChange={this.changeTracker}
      aria-label="disabled tabs example"
      >
      <Tab label="Day" />
      <Tab label="Night" />
      <Tab label="Humidity" />
      </Tabs>
      </div>
      <div>
      <FormControl margin="normal">
      {
      {[TAB_INDEX.DAY]: <Information tracker={dayTracker}/>,
      [TAB_INDEX.NIGHT]: <Information tracker={nightTracker}/>,
      [TAB_INDEX.HUMIDITY]: <Information tracker={humidity}/>,
      }[tracker]
      }

      </FormControl>
      </div>
      </div>
      );
      }
}

StatisticsPanel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  dayTracker: PropTypes.instanceOf(WeatherTracker).isRequired,
  nightTracker: PropTypes.instanceOf(WeatherTracker).isRequired,
  humidity: PropTypes.instanceOf(WeatherTracker).isRequired,
};


export default withStyles(style)(StatisticsPanel);
