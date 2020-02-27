 import * as types from '../actions/ActionTypes';

 const initialState = {
     number:0,

    //  dumbObject:{
    //      d:0,
    //      u:1,
    //  }
 };

 export default function counter(state = initialState, action){

    switch(action.type){
        case types.INCREMENT:
            // copy original and overwrite
            return {
                ...state, 
                number: state.number + 1,
                // dumbObject:{...state.dumbObject, u: 0}
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };   
        default:
            return state;
    }

    
 }