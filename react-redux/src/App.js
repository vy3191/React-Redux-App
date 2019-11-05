import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Form from  './components/Form';
import {getAllQuotes} from './actions/quotes';
import Quote from './components/Quote';
import './App.css';

function App(props) {
  useEffect( () => {
     props.getAllQuotes();
  },[]);
 console.log('app-12', props.quotes)
  return (
    <div className="App">
      <h1>Job Searching Website</h1>
      {
        (props.isLoading && props.quotes.length === 0) ?
        <h1>Loadign quotes...</h1> :
        (props.loaded && props.quotes.map( (quote, index) => {
           return <Quote key={index} quote={quote} />
        }))
      }
    </div>
  );
}

function mapStateToProps(state) {
   return {
     quotes: state.quotes,
     isLoading: state.isLoading,
     loaded:state.loaded
   }
}
const mapDispatchToProps = {
   getAllQuotes
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
