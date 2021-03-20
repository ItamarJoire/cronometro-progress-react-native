import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircularProgress from './components/CircularProgress';
import Play from './components/Play';

export default function App() {
  return (
    <View style={styles.container}> 
      <CircularProgress progress={50}/>
      <Play />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C0E',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
