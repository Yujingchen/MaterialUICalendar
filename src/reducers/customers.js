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

//Data
// "content" : [ {
//     "firstname" : "John",
//     "lastname" : "Johnson",
//     "streetaddress" : "5th Street",
//     "postcode" : "23110",
//     "city" : "Flintsone",
//     "email" : "john@mail.com",
//     "phone" : "232-2345540",
//     "content" : [ ],
//     "links" : [ {
//       "rel" : "self",
//       "href" : "https://customerrest.herokuapp.com/api/customers/1"
//     }, {
//       "rel" : "customer",
//       "href" : "https://customerrest.herokuapp.com/api/customers/1"
//     }, {
//       "rel" : "trainings",
//       "href" : "https://customerrest.herokuapp.com/api/customers/1/trainings"
//     } ]
//   }

//List
// customers: [
//     ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738', 'id', '712'],
//     ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789', 'id', '876'],
//     ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142', 'id', '432'],
//     ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735', 'id', '323'],
//     ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542', 'id', '123'],
//     ['Mason Porter', 'Chile', 'Gloucester', '$78,615', 'id', '1']
// ]