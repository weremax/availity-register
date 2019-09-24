import axios from 'axios';
import {
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    UPDATE
} from './types';

export function register(values) {
    return dispatch => {
        axios.post('https://weremax.free.beeceptor.com/registration', values)
            .then(response => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: response.data
                });
            })
            .catch(e => { 
                console.log('error', e);
            });
    }
}

export function registerError() {
    return dispatch => {
        axios.get('https://weremax.free.beeceptor.com/registration_error')
            .then(response => {
                dispatch({
                    type: REGISTER_ERROR,
                    payload: response.data
                })
            })
            .catch(e => {
                console.log('error', e);
            })
    }
}

export function update(values) {
    return ({
        type: UPDATE,
        payload: values
    })
}