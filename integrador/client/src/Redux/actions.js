import { ADD_FAV, REMOVE_FAV} from './action-type'
import axios from "axios";

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const {data} =  await axios.post(endpoint,{ character})
         return dispatch ({
            type: ADD_FAV,
            payload: data,
         })
      } catch (error) {
         window.alert(error.message)
      }
         
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
     };
 };


export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
             });

      } catch (error) {
         window.alert(error.message);
      }

      //  axios.delete(endpoint).then(({ data }) => {
      //     return dispatch({
      //        type: REMOVE_FAV,
      //        payload: data,
      //  });
      //  });
    };
 };