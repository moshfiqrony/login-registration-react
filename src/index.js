import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';
import {createStore} from "redux";
import allreducers from './reducers/index'
import Provider from "react-redux/es/components/Provider";

const store = createStore(allreducers)

ReactDOM.render(<Provider store={store}><MyApp/></Provider>, document.getElementById('root'));


