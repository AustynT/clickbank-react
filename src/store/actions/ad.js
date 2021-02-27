import axios from 'axios';
import * as actionTypes from './actionsTypes';



export const setAds = (ads) => 
{
    return {
        type: actionTypes.SET_ADS,
        ads: ads
    }
}

export const initAds = (id) =>
{
    return dispatch => 
    {
        axios.get(`http://127.0.0.1:8000/api/topic-ads/${id}`)
        .then(response => 
        {
            dispatch(setAds(response.data));
        }).catch(errror => 
            {
                console.log(errror)
            }
        )
    }
}