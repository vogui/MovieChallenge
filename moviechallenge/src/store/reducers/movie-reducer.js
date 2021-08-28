import * as actionTypes from '../constants'

const initialState = {
    movies:[],
   }

   export default function reducer (state = initialState, action){
    switch (action.type){
        case actionTypes.BRING_MOVIES :
         return {...state, movies:action.user};
       default: 
       return state
 }
}