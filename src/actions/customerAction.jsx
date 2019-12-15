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
export const customerDispatch = (data) => ({
    type: ActionTypes.GET_CUSTOMER,
    payload: data
});

export function fetchCustomer(id) {
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'get',
            url: `https://customerrest.herokuapp.com/api/customers/${id}`,
        };

        axios(ajaxRequest)
            .then((response) => {
                dispatch(customerDispatch(response.data));
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

//todo fix add customer action
export const addCustomerDispatch = () => ({
    type: ActionTypes.ADD_CUSTOMER
});


export function addCustomer(customer) {
    console.log(JSON.stringify(customer))
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'POST',
            url: 'https://customerrest.herokuapp.com/api/customers',
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(customer),
            dataType: "application/json"
        };

        axios(ajaxRequest)
            .then(() => {
                dispatch(addCustomerDispatch());
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


export function editCustomer(customer) {
    console.log(JSON.stringify(customer))
    return async (dispatch, getState) => {
        const ajaxRequest = {
            method: 'PUT',
            url: 'https://customerrest.herokuapp.com/api/customers/',
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(customer),
            dataType: "application/json"
        };

        axios(ajaxRequest)
            .then(() => {
                dispatch(addCustomerDispatch());
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