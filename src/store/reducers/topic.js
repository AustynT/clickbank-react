import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    topics: []
};

const topicReducer = (state = initialState, action) => 
{
    switch (action.type) {
        case actionTypes.SET_TOPICS:
            return {
                ...state,
                topics: action.payload.topics
            }
        case actionTypes.UPDATE_TOPIC:
            return {
                state
            }
        case actionTypes.DELETE_TOPIC:
            return {
                state
            }
    
        default:
            break;
    }

    return state;
};

export default topicReducer;