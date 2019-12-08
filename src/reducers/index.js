import { combineReducers } from "redux";

import customers from "./customers";

const rootReducers = () =>
    combineReducers({
        customers
    });

export default rootReducers;