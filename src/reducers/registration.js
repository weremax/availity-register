import {
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    status: {},
    type: '',
    firstName: 'Christopher',
    lastName: 'Blankenship',
    npiNumber: '42213',
    businessAddress: '1111 Test Street',
    telephoneNumber: '904-555-5555',
    email: 'hardcode45@yahoo.com'
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case REGISTER_ERROR:
            return { ...state, status: action.payload, loading: false };
        case REGISTER_SUCCESS:
            return { ...state, status: action.payload, loading: false };
        case UPDATE:
            return { ...state, ...action.payload};
        default:
            return state;
    }
}