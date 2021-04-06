import axios from 'axios';
import { FETCH_STATES } from './constants';



const url = 'http://localhost:3001/us-states/visitors/';

export const fetchStates = (value) => {
    return async (dispatch) => {
        const response = await axios.get(url+ value);
        console.log(response);
        dispatch({
            type: FETCH_STATES,
            payload: response.data
        })
    }
}
