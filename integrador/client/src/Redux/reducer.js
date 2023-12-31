import{ ADD_FAV, REMOVE_FAV} from './action-type'

const initialState = {
    myFavorites: [],
    detail: {}
}
function rootReducer (state = initialState, action){
switch(action.type){
    case ADD_FAV:

    return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    //     return {
//     ...state,
//     myFavorites:[...state.myFavorites, action.payload]
// }

    case REMOVE_FAV:
        // return{
        //     ...state,
        //     myFavorites: state.myFavorites.filter(char=> char.id !== action.payload)
        // }

        return { ...state, myFavorites: action.payload };
    default:
        return state
}

}

export default rootReducer;