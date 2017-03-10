import axios from 'axios';

const SERVER_URL = 'http://localhost'
const SERVER_PORT = '9000'

const ROOT_URL = `${SERVER_URL}:${SERVER_PORT}`


export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_BY_COORD = 'FETCH_WEATHER_BY_COORD';
export const CLEAR_DATA = 'CLEAR_DATA';

export function fetchWeather(city, country) {
    const url = `${ROOT_URL}/byCityAndCountry?country=${country}&city=${city}`
    const request = axios.get(url);

    return (dispatch) => {
        return request.then(({data}) => {
            dispatch({
                type: FETCH_WEATHER,
                payload: data
            })
        });
    };
}


export function searchByCoord(lat, lng) {
    const url = `${ROOT_URL}/byCoordinates?lat=${lat}&lng=${lng}` 
    const request = axios.get(url);

    return (dispatch) => {
        return request.then(({data}) => {
            dispatch({
                type: FETCH_WEATHER_BY_COORD,
                payload: data
            })
        });
    };
}

export function clearData() {

    return (dispatch) => {
        dispatch({
            type: CLEAR_DATA
        })
    }
}
