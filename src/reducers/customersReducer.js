import ActionTypes from "../actions/types";

export const initialState = {
    customers: [],
    rawData: []
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
            return {
                ...state,
                customers: [...this.state.customers, newCustomer(action.payload)]
            }
        case null:
            return state;
        default:
            return state;

    }
}

const formateData = (raw) => {
    return (
        raw.map((item) => {
            return ([[item.firstname, item.lastname].join(" "), item.city, item.email, item.phone, item.streetaddress, item.postcode])
        }))
}

const newCustomer = (customerObj) => {
    const arr = []
    return (
        customerObj.map((key, att) => {
            return (arr.concat([customerObj[key]]))
        })
    )
}