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

// export const locationGetById_REQ = (id) => ({
//   type: ActionTypes.LOCATION_GETBYID_REQ,
//   id: id,
// });

// export const locationGetById_OK = (location) => ({
//   type: ActionTypes.LOCATION_GETBYID_OK,
//   location: location,
// });
// export const locationGetById_X = () => ({
//   type: ActionTypes.LOCATION_GETBYID_X,
// });

// export function getLocation(id) {
//   return async (dispatch, getState) => {
//     dispatch(locationGetById_REQ(id));

//     const ajaxRequest = {
//       method: 'get',
//       url: API_ROOT + '/location/' + id
//     };

//     axios(ajaxRequest)
//       .then((response) => {
//         dispatch(locationGetById_OK(response.data[0]));
//       })
//       .catch((error) => {
//         console.error("Error: " + error);
//         dispatch(locationGetById_X());
//       })
//       .then(() => {
//         return {
//           type: null
//         };
//       });
//   };
// }
