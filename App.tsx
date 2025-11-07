import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Modal, Pressable, TextInput } from 'react-native';
import HeaderNav from './components/HeaderNav';
import React, { useState } from 'react';
import { BRAWLER_DATA } from './data/brawlers-data';
import Brawler from './components/Brawler';
import { BrawlerItem } from './types/BrawlerItem';


export default function App() {

  const [displayAddBrawlerModal, setDisplayAddBrawlerModal] = useState<boolean>(false);
  const [brawlers, setBrawlers] = useState<BrawlerItem[]>(BRAWLER_DATA);
  const [brawlerForm, setBrawlerForm] = useState<BrawlerItem>({
    image: require('./assets/interrogante.png'),
    name: '',
    rarity: '',
    credits: 0, 
  });
  // inicializado como objeto vacio pero con imagen.
   
  const handleDelete = (name: string) => {
    setBrawlers((prevBrawlers) => prevBrawlers.filter((b) => b.name !== name));
  }

  const addBrawler = (brawler : BrawlerItem):void => {
    // El :void es para definir que esta funcion no va a devolver nada. (cortesia de fernando)
    setBrawlers([...brawlers, brawler]) // Aqui estoy diciendo que mi estado va a cambiar a esto.
    setDisplayAddBrawlerModal(!displayAddBrawlerModal)
  }

  return (
    <>
      <HeaderNav setDisplayAddBrawlerModal={() => setDisplayAddBrawlerModal(!displayAddBrawlerModal)}/>
      
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={displayAddBrawlerModal} onRequestClose={() => setDisplayAddBrawlerModal(false)}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Agregar nuevo Brawler</Text>

                <Text style={styles.label}>Nombre:</Text>
                <TextInput
                style={styles.input}
                placeholder="Introduce el nombre"
                value={brawlerForm.name}
                onChangeText={(text) => setBrawlerForm({ ...brawlerForm, name: text })}
                />

                <Text style={styles.label}>Rareza (especial, superespecial, épico, mítico, legendario y ultralegendario):</Text>
                <TextInput
                style={styles.input}
                placeholder="Rareza"
                value={brawlerForm.rarity}
                onChangeText={(text) => setBrawlerForm({ ...brawlerForm, rarity: text })}/>

                <Text style={styles.label}>Créditos:</Text>
                <TextInput
                style={styles.input}
                placeholder="Introduce los créditos"
                keyboardType="numeric"
                value={brawlerForm.credits.toString()}
                onChangeText={(text) => setBrawlerForm({ ...brawlerForm, credits: parseInt(text) || 0 })} />

                <View style={styles.modalButtons}>

                  <Pressable style={[styles.button, styles.saveButton]} onPress={() => addBrawler(brawlerForm)}>
                    <Text style={styles.buttonText}>Guardar</Text>
                  </Pressable>

                  <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setDisplayAddBrawlerModal(false)}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </Pressable>

                </View> 
            </View>
          </View>
        </Modal>

        <FlatList
          data={brawlers}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={({ item }) => (
            <Brawler
              image={item.image}
              name={item.name}
              rarity={item.rarity}
              credits={item.credits}
              onDelete={handleDelete}
            />
          )}
          ListEmptyComponent = {(
          <Text style={styles.emptyText}>Sin items que desplegar</Text>
        )}
        />

      </View>
      <View style={styles.footer}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: '#fdf5adff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#7d82e2ff',
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  /* Ahora css del modal */
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000030',
  },
  modalContainer: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center', 
    marginTop: 80, 
    fontSize: 16, 
    color: '#000' ,
    fontWeight: 'bold',
  }
});

