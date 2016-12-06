import React, {Component} from 'react';
import store from '../store';
import{setLyrics, fetchLyrics} from '../action-creators/lyrics'
import axios from 'axios'
import Lyrics from '../components/Lyrics'

export default class LyricsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, store.getState(), {artistQuery:'', songQuery: ''});
    this.setArtist = this.setArtist.bind(this)
    this.setSong = this.setSong.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setArtist(artist){
    this.setState({artistQuery: artist})
  }

  setSong(song){
    this.setState({songQuery: song})

  }

  handleSubmit(){
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  render() {

    return (
        <Lyrics text={this.state.lyrics.text}
                setArtist={this.setArtist}
                setSong ={this.setSong}
                artistQuery={this.state.artistQuery}
                songQuery={this.state.songQuery}
                handleSubmit={this.handleSubmit}
                />

    )
  }
}
