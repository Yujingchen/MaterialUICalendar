import ActionTypes from "../actions/types";

export const initialState = {
    customers: [],
    rawData: [],
    customer: {}
};

export default function customersReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_ALL_CUSTOMERS:
            return {
                ...state,
                rawData: action.payload.content,
                customers: formateData(action.payload.content)
            }
        case ActionTypes.ADD_CUSTOMER:
            return state
        case ActionTypes.EDIT_CUSTOMER:
            return state
        case ActionTypes.GET_CUSTOMER:
            return {
                ...state,
                customer: formateData(action.payload.content)
            }
        case null:
            return state;
        default:
            return state;
    }
}

const formateData = (raw) => {
    if (raw && typeof raw === 'object' && raw.constructor === Array) {
        return (
            raw.map((item) => {
                return ([[item.firstname, item.lastname].join(" "), item.city, item.email, item.phone, item.streetaddress, item.postcode])
            }))
    }
    else if (raw && typeof raw === 'object' && raw.constructor !== Array) {
        return ([[raw.firstname, raw.lastname].join(" "), raw.city, raw.email, raw.phone, raw.streetaddress, raw.postcode])
    }
}


const newCustomer = (customerObj) => {
    const customerKeys = Object.keys(customerObj)
    return (customerKeys.map((key) => {
        return (customerObj[key])
    }))
}