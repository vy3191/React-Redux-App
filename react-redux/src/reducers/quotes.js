import {LOADING, SUCCESS, ERROR} from '../actions/quotes';

const initialState = {
   isLoading:false,
   loaded:false,
   quotes:[],
   error:null
};

export function reducer(state=initialState, action){
   switch(action.type) {
     case LOADING:
        return {
           ...state, 
           isLoading:true,
           loaded:false
        }
      case SUCCESS:
        return {
           ...state, 
           isLoading:false,
           loaded:true,
           quotes: action.payload
        } 
      case ERROR:
        return {
          ...state,
          isLoading:false,
          loaded:false,
          error:action.payload
        }   
     default:
       return state
   }
}