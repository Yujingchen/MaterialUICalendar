import ActionTypes from "../actions/types";

export const initialState = {
    auth: {
        isLoaded: true,
        isEmpty: true
    },
    profile: {
        isLoaded: true,
        isEmpty: true
    },
    isInitializing: false
};

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.USER_LOGIN:
            return {
                ...state,
                auth: { ...state.auth, isEmpty: false }
            }
        case null:
            return state;
        default:
            return state;
    }
}