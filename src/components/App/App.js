import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//wherever we need redux!
import { connect } from 'react-redux';
//function that changes props wherever it is called

class App extends Component {

  handleClick = () => {
    // everytime you dispatch an action, all your Reducers will run 
    // dispatch needs an Action
    this.props.dispatch({
      type: 'BUTTON_ONE'
    })
  }

  handleSecondClick = () => {
    // everytime you dispatch an action, all your Reducers will run 
    // dispatch needs an Action
    this.props.dispatch({
      type: 'BUTTON_TWO'
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.handleClick}>Button One!</button>
      <button onClick={this.handleSecondClick}>Button Two!</button>
      </div>
    );
  }
}


// connect curry 

// The following is what is going on.
// const connected = connect();
// const connectedApp = connected(App);
// export default connectedApp;

export default connect()(App);
