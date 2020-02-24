import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'; /* The <Provider /> makes the Redux store available to any nested 
                                        components that have been wrapped in the connect() function.
                                        Normally, you can’t use a connected component unless 
                                        it is nested inside of a <Provider>.
                                            */
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'; /* Here in createStore we are storing a new state that is provided by reducer. 
                                    In simple words it holds the data that we recive from reducer and distribute it 
                                    among the App and its components.*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(                               
                //<Provider>
                    <BrowserRouter>
                       <App />
                  </BrowserRouter>,
                //</Provider>,
                     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
