import reservationReducer from './reservationReducer';
import roomReducer from './roomReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
	reservation: reservationReducer,
	room: roomReducer
});

export default rootReducer;