import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View, StatusBar, Text} from 'react-native';
import createStore from './redux';
import Navigator from './navigators';

const {store} = createStore();

// Root component
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle="dark-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
