import { IS_LOADING, ERROR, LOADED } from '../Actions'

const initailState = {
    lyrics: "",
    isLoading: false,
    error: ""
}

export const mainReducer = (state=initailState, action)=>{
    switch(action.type){
        case IS_LOADING:
            return state

        case LOADED:
            return state

        case ERROR:
            return state

        default:
            return state
    }
} 