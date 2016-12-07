import {
	START_PLAYING,
	STOP_PLAYING,
	SET_CURRENT_SONG,
	SET_LIST
} from '../constants';
import AUDIO from '../audio'

export const startPlaying() => {
	return {
		type: START_PLAYING
		// isPlaying: true
	}
}

export const stopPlaying() => {
	return {
		type: STOP_PLAYING
	}
}

export const setCurrentSong = currentSong => {
	return {
		type: SET_CURRENT_SONG,
		currentSong: currentSong
	}
}

export const setList = currentList => {
	return {
		type: SET_LIST,
		currentList: currentList
	}
}


export const play = () => {
	return function (dispatch) {
		AUDIO.play();
		dispatch(startPlaying())
	}
}

export const pause = () => dispatch => {
	AUDIO.pause()
	dispatch(stopPlaying())
}

export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setList(currentSongList));
  dispatch(setCurrentSong(currentSong));
}

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
}

export const toggleOne = (selectedSong, selectedSongList) => (dispatch, getState) => {
  const state = getState().player;
  if (selectedSong.id !== state.currentSong.id)
    dispatch(startSong(selectedSong, selectedSongList));
  else dispatch(toggle());
}

export const toggle = () => dispatch => {
  const state = getState().player;
  if (state.isPlaying) dispatch(pause());
  else dispatch(play());
}

