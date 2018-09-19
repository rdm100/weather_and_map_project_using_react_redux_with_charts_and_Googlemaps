//using axios instead of .fetch() you can cut out the middle step of passing the results of the http request to the .json() method. 
// Axios just returns the data object you would expect.
//It also handles errors better than .fetch() where the .catch() block does not run when an incorrect URL is entered
import axios from 'axios';

const API_KEY =  '07a669a92354520dad8a3e91046461b4';
// const URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}'' + API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us&units=metric`;

	// request in the line below is a promise
	const request = axios.get(url);

	console.log('Request', request);

	return{
		type: FETCH_WEATHER,
		// we return the promise 'request' As the payload
		payload: request
	};
}

