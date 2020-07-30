import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { incrementar, decrementar, setear } from './reducers';
import UserForm from './components/UserForm'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  handleSubmit = payload => {
    console.log(payload)
  }
  render() {
    return (
      <div className="App">
        <UserForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    valor: state.contador,
  }
}

const mapDispatchToProps = dispatch => ({
  //incrementar: () => dispatch(incrementar()), 
  //decrementar: () => dispatch(decrementar()),
  //setear: payload => dispatch(setear(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
