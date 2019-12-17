import ActionTypes from "../actions/types";

export const initialState = {
    trainings: [],
    rawData: []
};

export default function trainingsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_ALL_TRAINING:
            if (action.payload) {
                return {
                    ...state,
                    rawData: action.payload,
                    trainings: formatData(action.payload)
                }
            }
            return state;
        case ActionTypes.ADD_TRAINING:
            return state
        case null:
            return state;
        default:
            return state;
    }
}







const formatData = (rawData) => {
    if (rawData && typeof rawData === 'object' && rawData.constructor === Array) {
        return (rawData.map((item) => {
            return ({ title: item.activity, start: item.date, end: calculateEndDate(item.date, item.duration) })
        }))
    }
}

//calculate end date by adding start date and duration in millisecond
//start date time format ISO8601 in milliseconds
//end = start + minutes * 60000
const calculateEndDate = (start, duration) => {
    if (start && duration && typeof duration === 'number') {
        return start + duration * 60000
    }
}