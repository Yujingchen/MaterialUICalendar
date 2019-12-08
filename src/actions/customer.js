import ActionTypes from './types';
import axios from 'axios';


export const customersALL = (payload) => ({
    type: ActionTypes.GET_ALL_CUSTOMERS,
    payload: payload
});

export function fetchAllCustomers() {
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'get',
            url: 'https://customerrest.herokuapp.com/api/customers',
        };

        axios(ajaxRequest)
            .then((response) => {
                console.log(response.data)
                dispatch(customersALL(response.data));
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

export const customerAdd = (payload) => ({
    type: ActionTypes.ADD_CUSTOMER,
    payload: payload
});


export function addCustomer(customer) {
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'put',
            url: 'https://customerrest.herokuapp.com/api/customers',
            customer: customer
        };

        axios(ajaxRequest)
            .then(() => {
                dispatch(customerAdd());
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