import { ADD_FAV, REMOVE_FAV} from './action-type'
import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

// export const addFav = (payload) => {
//     return {
//         type: ADD_FAV,
//         payload
//     }
// }

// export const removeFav = (payload) => {
//     return {
//         type: REMOVE_FAV,
//         payload
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };