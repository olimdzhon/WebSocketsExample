/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {useWebSocket} from './hooks/useWebSockets';

const App = () => {
  const {messages}: {messages: any[]} = useWebSocket();

  console.log('messages', messages);

  return <View></View>;
};

export default App;
