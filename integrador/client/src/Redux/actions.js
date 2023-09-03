import { ADD_FAV, REMOVE_FAV} from './action-type'


export const addFav = (payload) => {
    return {
        type: ADD_FAV,
        payload
    }
}

export const removeFav = (payload) => {
    return {
        type: REMOVE_FAV,
        payload
    }
}