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

export const addTrainingDispatch = () => ({
    type: ActionTypes.ADD_TRAINING
});


export function addTraining(training) {
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'POST',
            url: 'https://customerrest.herokuapp.com/api/trainings',
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(training),
            dataType: "application/json"
        };

        axios(ajaxRequest)
            .then(() => {
                dispatch(addTrainingDispatch());
            })
            .catch((error) => {
                console.error("Error: " + error);
            })
            .then(() => {
                return {
                    type: null
                }; // 'Empty' action object
            });
    }
};