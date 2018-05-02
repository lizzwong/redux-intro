import { combineReducers } from 'redux';

const firstReducer = (state = 0, action) => {
    // everytime you dispatch an action, all your Reducers will run 
    //this is a reducer
    // if(action.type === 'BUTTON_ONE') {
    //     console.log(`Hi! I'm a reducer`); 
    //     return state += 1
    // } else if (action.type === 'BUTTON_TWO') {
    //     return state -= 1
    // }

    // return state;

    switch (action.type) {
        case 'BUTTON_ONE':
            return state += 1;
        case 'BUTTON_TWO':
            return state -= 1;
        default:
            return state;
    }
}

const secondReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_TWO') {
        console.log(`Hi! I'm the second reducer`);
        return state -= 1
    }
    return state;
}

const thirdReducer = (state, action) => {
    console.log(`Hi! I'm the third reducer. This is the action.`, action);
    return {};
}

const elementReducer = (state = [], action) => {
    if (action.type === 'ADD_ELEMENT') {
        console.log(`Hi! I'm adding an element:`, action.payload);
        // don't push into array
        return [...state, action.payload]
    }
    return state;
}

export default combineReducers({
        firstReducer,
        secondReducer,
        thirdReducer,
        elementReducer
    })