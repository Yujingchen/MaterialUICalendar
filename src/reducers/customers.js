import ActionTypes from "../actions/types";

export const initialState = {
    customerList: [],
    customerData: []
};

export default function getCustomers(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_ALL_CUSTOMERS:
            return {
                ...state,
                customerData: action.payload.content,
                customerList: newCustomerlist(action.payload.content)
            }
        case ActionTypes.ADD_CUSTOMER:
            return {
                ...state,
                customerList: [...this.state.customerList, newCustomer(action.payload)]
            }
        case null:
            return state;
        default:
            return state;

    }
}

const newCustomerlist = (raw) => {
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