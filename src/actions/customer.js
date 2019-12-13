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


//todo

export const customerAdd = (payload) => ({
    type: ActionTypes.ADD_CUSTOMER,
    payload: payload
});


export function addCustomer(customer) {
    return async (dispatch, getState) => {
        console.log(customer)
        const ajaxRequest = {
            method: 'put',
            url: 'https://customerrest.herokuapp.com/api/customers',
            // Header: 'Content-Type': 'application/json',
            // Body: {
            //     "firstname": "Gary",
            //     "lastname": "Philips",
            //     "streetaddress": null,
            //     "postcode": "23322",
            //     "city": "Flintsone",
            //     "email": "m.philips@mail.com",
            //     "phone": "232-310122",
            // }
        };

        axios(ajaxRequest)
            .then(() => {
                dispatch(customerAdd(customer));
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