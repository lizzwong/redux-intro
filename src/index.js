import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
// createStore is a function
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider is a component 
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import registerServiceWorker from './registerServiceWorker';

import reducers from './redux/reducers/app.reducer'

// const firstReducer = (state = 0, action) => {
//     // everytime you dispatch an action, all your Reducers will run 
//     //this is a reducer
//     // if(action.type === 'BUTTON_ONE') {
//     //     console.log(`Hi! I'm a reducer`); 
//     //     return state += 1
//     // } else if (action.type === 'BUTTON_TWO') {
//     //     return state -= 1
//     // }

//     // return state;

//     switch (action.type) {
//         case 'BUTTON_ONE': 
//             return state += 1;
//         case 'BUTTON_TWO':
//             return state -= 1;
//         default:
//             return state;    
//     }
// }

// const secondReducer = (state = 0, action) => {
//     if(action.type === 'BUTTON_TWO'){
//         console.log(`Hi! I'm the second reducer`);
//         return state -= 1
//     }
//     return state;
// }

// const thirdReducer = (state, action) => {
//     console.log(`Hi! I'm the third reducer. This is the action.`, action);
//     return {};
// }

// const elementReducer = (state = [], action) => {
//     if (action.type === 'ADD_ELEMENT') {
//         console.log(`Hi! I'm adding an element:`, action.payload);
//         // don't push into array
//         return [...state, action.payload]
//     }
//     return state;
// }

const storeInstance = createStore(
    // everytime you dispatch an action, all your Reducers will run 
            //this is a reducer
            // combineReducers({
            //     firstReducer,
            //     secondReducer,
            //     thirdReducer,
            //     elementReducer
            // }),
    reducers,
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
