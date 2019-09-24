import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registration from './registration';

export default combineReducers({
    form: formReducer,
    registration
});