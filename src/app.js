import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBsqrkmsQMmRLv0FyeX-aDwODlesJpA5k0',
      authDomain: 'manager-a7ebd.firebaseapp.com',
      databaseURL: 'https://manager-a7ebd.firebaseio.com',
      projectId: 'manager-a7ebd',
      storageBucket: 'manager-a7ebd.appspot.com',
      messagingSenderId: '177652308026'
    };
    firebase.initializeApp(config);
  }

  render() {
    // second argument is for initial state for prefilling... not common
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
