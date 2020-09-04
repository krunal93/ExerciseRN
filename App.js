/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import ImageList from './src/components/ImageList';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={store}>
          <ImageList imageCount={10} />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
