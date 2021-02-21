import { combineReducers } from 'redux';
import topicReducer from './topicReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    topic: topicReducer,
    posts: postReducer
})

export default rootReducer;