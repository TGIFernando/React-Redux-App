export const IS_LOADING = 'IS_LOADING'
export const ERROR = 'ERROR'
export const LOADED = 'LOADED'
//https://api.lyrics.ovh/v1/coldplay/adventure%20of%20a%20lifetime
export const fetchLyrics = (artist, song) => {
    return {type: IS_LOADING, payload: artist, song: song}
}