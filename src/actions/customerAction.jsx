import ActionTypes from './types';
import axios from 'axios';


export const customersDispatch = (data) => ({
    type: ActionTypes.GET_ALL_CUSTOMERS,
    payload: data
});

export function fetchAllCustomers() {
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'get',
            url: 'https://customerrest.herokuapp.com/api/customers',
        };

        axios(ajaxRequest)
            .then((response) => {
                dispatch(customersDispatch(response.data));
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


//todo

export const addCustomerDispatch = (data) => ({
    type: ActionTypes.ADD_CUSTOMER,
    payload: data
});


export function addCustomer(customer) {
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'put',
            url: 'https://customerrest.herokuapp.com/api/customers',
        };

        axios(ajaxRequest)
            .then(() => {
                dispatch(addCustomerDispatch(customer));
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