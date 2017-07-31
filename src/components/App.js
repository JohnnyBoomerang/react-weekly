import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';





class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <div className="container play-lists">
          <PlayListForm />
          <PlayList />

        </div>
      </div>
    );
  }
}

export default App;
