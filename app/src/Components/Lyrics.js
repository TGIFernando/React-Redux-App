import React from 'react'
import { connect } from 'react-redux'
import * as sty from '../StyledComponents/lyrics.Styles'
function Lyrics(props){

    const isErrorOn = () => {
        if(props.error !== ""){
            return false
        }else{
            return true
        }
    }

    return(
        <sty.MainDiv>
            <sty.FlexyDiv className={`loading${props.isLoading ? 'True' : 'False'}`}>
                <sty.Lyric className={`${isErrorOn() ? 'Visible' : 'NotVisible'}`}>Lyrics</sty.Lyric>
                <sty.Lyrics>{props.lyrics}</sty.Lyrics>
                <sty.Error className={`${isErrorOn() ? 'NotVisible' : 'Visible'}`}>{props.error}</sty.Error>
            </sty.FlexyDiv>
            <sty.LoadDiv className={`load loading${props.isLoading ? 'True1' : 'True'}`}>
                <sty.Loading>LOADING...</sty.Loading>
            </sty.LoadDiv>
        </sty.MainDiv>
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