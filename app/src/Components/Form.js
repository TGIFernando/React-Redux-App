import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../Actions'

class Form extends Component{
    state = {
        artist: '',
        song: '',
    }
    onChange = e => {
        const name = e.target.name
        this.setState({...this.state, [name]: e.target.value})
        console.log(this.state)
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.fetchLyrics(this.state.artist, this.state.song)
    }
    render(){
        return(
            <div>
                <h1>FORM</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Artist</label>
                    <input onChange={this.onChange} value={this.state.artist} type='text' name='artist'/>
                    <label>Song</label>
                    <input onChange={this.onChange} value={this.state.song} type='text' name='song'/>
                    <button>SEARCH FOR LYRICS</button>
                </form>
            </div>
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