import React from 'react'
import { connect } from 'react-redux'

function Lyrics(props){
    return(
        <div>
            <div className={`loading${props.isLoading ? 'True' : 'False'}`}>
                <h2>Lyrics</h2>
                <div>{props.lyrics}</div>
                <div>{props.error}</div>
            </div>
            <div className={`load loading${props.isLoading ? 'True1' : 'True'}`}>
                <h1>LOADING...</h1>
            </div>
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