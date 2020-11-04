import React from 'react'
import { connect } from 'react-redux'

function Lyrics(props){
    return(
        <div>
            <h1>Lyrics</h1>
            <div>{props.lyrics}</div>
            <div>{props.error}</div>
        </div>
    )
}

 const mapStateToProps = (state) => {
    return{
        lyrics: state.lyrics,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(Lyrics)