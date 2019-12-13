import ActionTypes from './types';
import axios from 'axios';

export const trainingsDispatch = (data) => ({
    type: ActionTypes.GET_ALL_TRAINING,
    payload: data
});

export function fetchAllTrainings() {
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'get',
            url: 'https://customerrest.herokuapp.com/gettrainings',
        };

        axios(ajaxRequest)
            .then((response) => {
                dispatch(trainingsDispatch(response.data));
            })
            .catch((error) => {
                console.error("Error: " + error);
            })
            .then(() => {
                return {
                    type: null
                };
            });
    }
}