import React, { Component } from 'react';
import './App.css';

//wherever we need redux!
import { connect } from 'react-redux';
//function that changes props wherever it is called

class App extends Component {

  constructor(props) {
    super(props);//do this or things will break

    this.state = {
      newElement: {
        name: '',
      },
      elementArray: [],
    }
  }

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

  handleAddStar = () => {
      this.props.dispatch(
      {
        type: 'ADD_STAR',
        payload: {
          name: 'Gacrux',
          diameter:50
        }
      }
    )
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState(
      {
        newElement: {
          ...this.state.newElement,
          [propertyName]: event.target.value
        },

      }
    )
  }

  handleAddElement = (event) => {
    event.preventDefault();
    this.setState(
      {
        elementArray: [...this.state.elementArray, this.state.newElement],
        newElement: {
          name: '',
        }
      }
    )
    console.log('submitting...', this.state.elementArray);
    this.props.dispatch ({
      type: 'ADD_ELEMENT',
      payload: this.state.newElement
    })
  }

  
  render() {
    return (
      <div className="App">
      <button onClick={this.handleClick}>Button One!</button>
      <button onClick={this.handleSecondClick}>Button Two!</button>
      <button onClick={this.handleAddStar}>Add Star!</button>
      <input onChange={this.handleChangeFor('name')} value={this.state.newElement.name} type="text" placeholder="Element" />
      <button onClick={this.handleAddElement}>Add Element!</button>
      <p>Add element: {this.state.newElement.name}.</p>
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
