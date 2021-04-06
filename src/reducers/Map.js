import {  FETCH_STATES } from '../actions';


export const mapReducer = (
    state = [],
    action
) => {
    switch (action.type) {
        case FETCH_STATES:
            console.log('here store',state);
            return action.payload;
        default:
            return state;
    }
}