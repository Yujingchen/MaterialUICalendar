//react-router v4 + redux-auth-wrapper v2
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
// import createHistory from "history/createBrowserHistory";
// import { createBrowserHistory } from "history";
import Spinner from "../layouts/Spinner"; // change it to your custom component

const locationHelper = locationHelperBuilder({});
// const history = createBrowserHistory();

export const UserIsAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: "UserIsAuthenticated",
    AuthenticatingComponent: Spinner,
    allowRedirectBack: true,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || "/signin",
    authenticatingSelector: ({ auth: { auth, profile, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ auth: { auth } }) =>
        auth.isLoaded && !auth.isEmpty
    // redirectAction: newLoc => (dispatch) => {
    //   browserHistory.replace(newLoc); // or routerActions.replace
    //   dispatch({ type: 'UNAUTHED_REDIRECT' });
    // },
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: "UserIsNotAuthenticated",
    AuthenticatingComponent: Spinner,
    allowRedirectBack: false,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || "/dashboard",
    authenticatingSelector: ({ auth: { auth, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ auth: { auth } }) =>
        auth.isLoaded && auth.isEmpty
    // redirectAction: newLoc => (dispatch) => {
    //   browserHistory.replace(newLoc); // or routerActions.replace
    //   dispatch({ type: 'UNAUTHED_REDIRECT' });
    // },
});