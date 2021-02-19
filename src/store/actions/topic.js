import * as actionTypes from './actionsTypes';


export const createTopic = (title) => {
    return {
        type: actionTypes.CREATE_TOPIC,
        title: title
    }
}