import { combineReducers } from 'redux';
import topicReducer from './topic';

const rootReducer = combineReducers({
    topic: topicReducer
})

export default rootReducer;