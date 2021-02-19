const initialState = {
    topics: []
};

const topicReducer = (state = initialState, action) => 
{
    switch (action.type) {
        case 'GET_TOPICS':
            return {
                topics: []
            }
        case 'UPDATE_TOPIC':
            return {
                topics: []
            }
        case 'DELETE_TOPIC':
            return {
                topics: []
            }
    
        default:
            break;
    }
    return state;
};

export default topicReducer;