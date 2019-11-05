import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer} from './reducers/quotes';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
