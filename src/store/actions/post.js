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
export const setPosts = (posts) => 
{
    return {
        type: actionTypes.SET_POSTS,
        posts: posts.posts
    }
}

export const initPosts = (id) =>
{
    return dispatch => 
    {
        axios.get(`http://127.0.0.1:8000/api/topic/${id}`)
        .then(response => 
        {
            dispatch(setPosts(response.data));
        }).catch(errror => 
            {
                console.log(errror)
            }
        )
    }
}