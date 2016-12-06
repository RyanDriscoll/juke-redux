import {SET_LYRICS} from '../constants';

const initialState = { text: '' };

const reducer = (prevState = initialState, action) => {
  switch(action.type) {
    case SET_LYRICS:
      const newState = Object.assign({}, prevState, { text: action.lyric });
      return newState;
    default:
      return prevState;
  }
}

export default reducer;