import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Login from './src/pages/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop:60
  },
});

export default App;
