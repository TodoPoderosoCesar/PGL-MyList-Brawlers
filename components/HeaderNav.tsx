import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type HeaderNavProps = {
  setDisplayAddBrawlerModal: () => void
}

export default function HeaderNav({setDisplayAddBrawlerModal}:HeaderNavProps) {
  // Estoy descomponiendo los atributos/propiedades del objeto.
  return (
      <View style={styles.header}>
        <Ionicons name="add-circle-outline" 
        size={50} color="black" 
        style={styles.button}
        onPress={setDisplayAddBrawlerModal}/>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: '#7d82e2ff',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: 40,
    marginRight: 20,
  },
});
