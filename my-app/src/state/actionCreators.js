import axios from 'axios';
import * as types from './actionTypes';

export const getCharacters = () => (dispatch) => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        const characters = res.data.results;
        dispatch({
          type: types.SET_CHARACTERS,
          payload: characters,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };