import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HeaderNav() {

    return (
        <View style={styles.header}>
          <Ionicons name="add-circle-outline" 
          size={50} color="black" 
          style={styles.button}
          onPress={() => alert('Has pulsado el icono')}/>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: '#b2d2ffff',
    borderBottomWidth: 1,
    borderBottomColor: '#384d6aff',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: 40,
    marginRight: 20,
  },
});
