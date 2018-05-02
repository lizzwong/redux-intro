import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
// createStore is a function
import { createStore, combineReducers } from 'redux';
// Provider is a component 
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const firstReducer = (state, action) => {
    // everytime you dispatch an action, all your Reducers will run 
    //this is a reducer
    console.log(`Hi! I'm a reducer`); 
    return {};
}

const secondReducer = (state, action) => {
    console.log(`Hi! I'm the second reducer`);
    return {};
}

const thirdReducer = (state, action) => {
    console.log(`Hi! I'm the third reducer`, action);
    return {};
}

const storeInstance = createStore(
    // everytime you dispatch an action, all your Reducers will run 
    //this is a reducer
    combineReducers({
        firstReducer,
        secondReducer,
        thirdReducer
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();