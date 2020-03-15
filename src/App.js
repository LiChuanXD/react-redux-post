import React , { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store/reduxStore';

import Navbar from './components/Navbar'
import Write from './components/Write';
import Posts from './components/Posts';

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="App container-fluid">
          <Navbar />
          <Write />
          <hr />
          <Posts />
        </div>
      </Provider>
      
    )
  }
}


export default App;
