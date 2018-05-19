import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";

import PropTypes from "prop-types";

class WeatherList extends Component {
  renderWeather = (city, i) => {
    const name = city.city.name;
    const temps = _.map(city.list.map(weather => weather.main.temp), (temp) => (temp*(9/5)-459.67) );
    const humidity = city.list.map(weather => weather.main.humidity);
    const pressures = city.list.map(weather => weather.main.pressure);

    console.log(city);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="green" units="F"/>
        </td>
        <td>
          <Chart data={pressures} color="red" units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color="blue" units="%"/>
        </td>
       
      </tr>
    );
  };

  render() {
    console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp(F)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}
//Normally (state) - instead of state.weather ---> just weather in curlies ES6
function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(WeatherList);
