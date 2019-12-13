import { combineReducers } from "redux";

import customers from "./customers";
import trainings from "./trainingReducer"
const rootReducers = () =>
    combineReducers({
        customers, trainings
    });

export default rootReducers;