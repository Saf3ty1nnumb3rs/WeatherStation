import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather = (city, i) => {
    const name = city.city.name
      console.log(city)
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  };

  render() {
      console.log(this.props.weather)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
