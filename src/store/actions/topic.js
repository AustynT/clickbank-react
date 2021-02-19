import * as actionTypes from './actionsTypes';


export const getTopic = () => {
    return {
        type: actionTypes.GET_TOPICS
    }
}

export const createTopic = (title) => {
    return {
        type: actionTypes.CREATE_TOPIC,
        payload: 
        {
            title: title
        } 
    }
}

export const updateTopic = (id, title) => {
    return {
        type: actionTypes.UPDATE_TOPIC,
        payload: 
        {
            id: id,
            title: title
        } 
    }
}

export const deleteTopic = (id) => {
    return {
        type: actionTypes.DELETE_TOPIC,
        payload: 
        {
            id: id
        }
    }
}