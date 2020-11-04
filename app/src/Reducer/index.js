import { IS_LOADING, ERROR, LOADED } from '../Actions'

const initailState = {
    lyrics: "",
    isLoading: false,
    error: ""
}

export const mainReducer = (state=initailState, action)=>{
    switch(action.type){
        case IS_LOADING:
            return {
                lyrics: "",
                isLoading: true,
                error: ""
            }

        case LOADED:
            if (action.payload === ""){
                return{
                    lyrics: "",
                    isLoading: false,
                    error: "Cannot find song right now try later"
                }
            } else{
                return {
                    lyrics: action.payload,
                    isLoading: false,
                    error: ""
                }
            }

        case ERROR:
            return {
                lyrics: "",
                isLoading:false,
                error: "Something went wrong try again later"
            }

        default:
            return state
    }
} 