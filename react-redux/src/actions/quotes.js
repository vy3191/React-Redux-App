import axios from 'axios';

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export function getAllQuotes() {
   console.log('actions working now')
   return (dispatch) => {
     dispatch({type: LOADING});
     axios.get('https://quote-garden.herokuapp.com/quotes/all')
          .then( response => {
             console.log(response)
             dispatch({type:SUCCESS, payload: response.data.results.slice(0,25)})
          })
          .catch( err => {
             dispatch({type:ERROR,payload:err})
          })
   }
}