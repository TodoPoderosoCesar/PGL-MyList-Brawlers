import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderNav from './components/HeaderNav';


export default function App() {
  return (
    <>
      
      <HeaderNav />
      
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
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
});
