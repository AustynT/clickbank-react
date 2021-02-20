import axios from 'axios';
import * as actionTypes from './actionsTypes';

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

export const setTopics = (topics) => 
{
    return {
        type: actionTypes.SET_TOPICS,
        payload: {
            topics
        }
    }
}

export const initTopics = () =>
{
    return dispatch => 
    {
        axios.get('http://127.0.0.1:8000/api/topics')
        .then(response => 
        {
            dispatch(setTopics(response.data));
        }).catch(errror => 
            {
                console.log(errror)
            }
        )
    }
}