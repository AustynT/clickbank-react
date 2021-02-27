import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    ads: []
};

const adReducer = (state = initialState, action) => 
{

    switch (action.type) 
    {
        case actionTypes.SET_ADS:
            return  {
                ...state,
                ads: action.ads
            } 
        case actionTypes.UPDATE_POST:
            return {
                state
            }
        case actionTypes.CREATE_POST:
            return {
                state
            }
        case actionTypes.DELETE_POST:
            return {
                state
            }
    
        default:
            break;
    }
    return state;
};

export default adReducer;