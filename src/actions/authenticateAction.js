import ActionTypes from './types';

export const loginDispatch = () => ({
    type: ActionTypes.USER_LOGIN,
});

export function login() {
    return async (dispatch) => {
        dispatch(loginDispatch());
    }
}
