import * as actionTypes from "../actions/actions";

const initialState = {
    topics: []
};

const topicReducer = (state = initialState, action) => 
{
    switch (action.type) {
        case actionTypes.GET_TOPICS:
            return {
                topics: []
            }
        case actionTypes.UPDATE_TOPIC:
            return {
                topics: []
            }
        case actionTypes.DELETE_TOPIC:
            return {
                topics: []
            }
    
        default:
            break;
    }
    return state;
};

export default topicReducer;