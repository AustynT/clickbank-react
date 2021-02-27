import { combineReducers } from 'redux';
import topicReducer from './topicReducer';
import postReducer from './postReducer';
import adReducer  from "./adReducer";

const rootReducer = combineReducers({
    topic: topicReducer,
    posts: postReducer,
    ads: adReducer
})

export default rootReducer;