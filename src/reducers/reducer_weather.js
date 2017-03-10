import { FETCH_WEATHER, FETCH_WEATHER_BY_COORD, CLEAR_DATA } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload, ...state ];
        case FETCH_WEATHER_BY_COORD:
            return [action.payload, ...state ];
        case CLEAR_DATA:
            return [];

        // Equivalent ES6 de "return state.concat([action.payload.data]);"
    }

    return state;
}