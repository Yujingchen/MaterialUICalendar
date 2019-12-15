import { combineReducers } from "redux";

import customers from "./customersReducer";
import trainings from "./trainingReducer"
import auth from "./authReducer"
const rootReducers = () =>
    combineReducers({
        customers, trainings, auth
    });

export default rootReducers;