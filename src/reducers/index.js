import { combineReducers } from "redux";

import customers from "./customersReducer";
import trainings from "./trainingReducer"
const rootReducers = () =>
    combineReducers({
        customers, trainings
    });

export default rootReducers;