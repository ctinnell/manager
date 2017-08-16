import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
