import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather() {
			return this.props.weather.map((cityData) => {
			const temps = cityData.list.map((weather) => weather.main.temp);
			const pressures = cityData.list.map((weather) => weather.main.pressure);
			const humidities = cityData.list.map((weather) => weather.main.humidity);
			console.log(temps);
			return (
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td><Chart data={temps} color="orange" units="C"/></td>				
				<td><Chart data={pressures} color="blue" units="hPa"/></td>
				<td><Chart data={humidities} color="green" units="%"/></td>
			</tr>
				)
		});
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.renderWeather()}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state){
	return {
		weather: state.weather
	};
}

export default connect(mapStateToProps, null)(WeatherList)
