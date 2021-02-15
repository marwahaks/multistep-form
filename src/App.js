// app.js
import React, { Component } from 'react';
import './App.css';
import MainForm from './Components/MainForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return(
      <Container textAlign='center'>
        <MainForm />
      </Container>    
      )
  }
}

export default App;