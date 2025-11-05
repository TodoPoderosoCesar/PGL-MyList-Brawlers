import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderNav from './components/HeaderNav';
import React from 'react';


export default function App() {
  return (
    <>
      
      <HeaderNav />
      
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.footer}>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: '#fcffb2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#b2d2ffff',
    borderTopWidth: 1,
    borderTopColor: '#384d6aff',
  },
});
