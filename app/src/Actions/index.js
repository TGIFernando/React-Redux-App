import axios from 'axios'
export const IS_LOADING = 'IS_LOADING'
export const ERROR = 'ERROR'
export const LOADED = 'LOADED'
//https://api.lyrics.ovh/v1/coldplay/adventure%20of%20a%20lifetime
export const fetchLyrics = (artist, song) => (dispatch) => {
    dispatch({type: IS_LOADING})
    axios.get(`https://api.lyrics.ovh/v1/coldplay/adventure%20of%20a%20lifetime`)
        .then(res => {
            console.log(res)
            dispatch({type: LOADED})
        }).catch(err => {
            console.log('ERROR: ', err)
            dispatch({type: ERROR})
        })
}