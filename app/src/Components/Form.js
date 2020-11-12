import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../Actions'
import * as sty from '../StyledComponents/formStyles'

class Form extends Component{
    state = {
        artist: '',
        song: '',
    }
    onChange = e => {
        const name = e.target.name
        this.setState({...this.state, [name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.fetchLyrics(this.state.artist, this.state.song)
    }
    render(){
        return(
            <sty.FlexyDiv>
                <sty.FlexyForm onSubmit={this.onSubmit}>
                    <sty.Label>Artist</sty.Label>
                    <sty.Input placeholder='Artist Name' onChange={this.onChange} value={this.state.artist} type='text' name='artist'/>
                    <sty.Label>Song</sty.Label>
                    <sty.Input placeholder='Song Name' onChange={this.onChange} value={this.state.song} type='text' name='song'/>
                    <sty.Button>SEARCH FOR LYRICS</sty.Button>
                </sty.FlexyForm>
            </sty.FlexyDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        lyrics: state.lyrics,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchLyrics})(Form)