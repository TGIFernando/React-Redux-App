import axios from 'axios'
export const IS_LOADING = 'IS_LOADING'
export const ERROR = 'ERROR'
export const LOADED = 'LOADED'
//https://api.lyrics.ovh/v1/coldplay/adventure%20of%20a%20lifetime
export const fetchLyrics = (artist, song) => (dispatch) => {
    dispatch({type: IS_LOADING})
    axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(res => {
            console.log(res.data)
            console.log('Artist: ',artist, ' Song: ', song)
            dispatch({type: LOADED, payload: res.data.lyrics})
        }).catch(err => {
            dispatch({type: ERROR})
        })
}