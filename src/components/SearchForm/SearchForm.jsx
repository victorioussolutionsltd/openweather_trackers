import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './style';

class SearchForm extends React.Component {

  state = {
    city : '',
    country: '',
  }

  updateCity = (event) => {
    this.setState({city: event.target.value});
  }

  updateCountry = (event) => {
    this.setState({country: event.target.value})
  }

  render() {
    const { classes, onSubmit } = this.props;
    
    return (
      <>
        <TextField
          id="city"
          label="City"
          type="search"
          className={classes.textField}
          onChange={this.updateCity}
          margin="normal"
        />
        <TextField
          id="country"
          label="Country"
          type="search"
          className={classes.textField}
          onChange={this.updateCountry}
          margin="normal"
        />
        <p />
        <Button onClick={() => {onSubmit({...this.state})}}>Search</Button>
      </>
    );
  }
}
SearchForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(style)(SearchForm);
