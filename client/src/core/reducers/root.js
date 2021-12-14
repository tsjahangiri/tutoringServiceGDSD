import { combineReducers } from 'redux';
import homeReducer from '../../pages/home/reducer';

const rootReducer = combineReducers({
    homeReducer,
});

export default rootReducer;