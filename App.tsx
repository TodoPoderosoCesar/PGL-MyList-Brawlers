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
    image: '',
    name: '',
    rarity: '',
    credits: 0, 
  });
  // inicializado como objeto vacio
   
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
        <Modal
            animationType="slide"
            transparent={true}
            visible={displayAddBrawlerModal}
            onRequestClose={() => setDisplayAddBrawlerModal(false)} // NUEVO
        >
            <View style={styles.overlay}> {/* NUEVO */}
            <View style={styles.modalContainer}> {/* NUEVO */}
                <Text style={styles.modalTitle}>Agregar nuevo Brawler</Text> {/* NUEVO */}

                <Text style={styles.label}>Nombre:</Text> {/* NUEVO */}
                <TextInput
                style={styles.input}
                placeholder="Introduce el nombre"
                value={brawlerForm.name}
                onChangeText={(text) => setBrawlerForm({ ...brawlerForm, name: text })} // NUEVO
                />

                <Text style={styles.label}>Rareza:</Text> {/* NUEVO */}
                <TextInput
                style={styles.input}
                placeholder="Ejemplo: épico, mítico, legendario..."
                value={brawlerForm.rarity}
                onChangeText={(text) => setBrawlerForm({ ...brawlerForm, rarity: text })} // NUEVO
                />

                <Text style={styles.label}>Créditos:</Text> {/* NUEVO */}
                <TextInput
                style={styles.input}
                placeholder="Introduce los créditos"
                keyboardType="numeric"
                value={brawlerForm.credits.toString()}
                onChangeText={(text) =>
                    setBrawlerForm({ ...brawlerForm, credits: parseInt(text) || 0 })
                } // NUEVO
                />

                <View style={styles.modalButtons}> {/* NUEVO */}
                <Pressable
                    style={[styles.button, styles.saveButton]}
                    onPress={() => addBrawler(brawlerForm)}
                >
                    <Text style={styles.buttonText}>Guardar</Text>
                </Pressable>

                <Pressable
                    style={[styles.button, styles.cancelButton]}
                    onPress={() => setDisplayAddBrawlerModal(false)}
                >
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
        />
      </View>

      <View style={styles.footer}></View>
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
  /* Ahora css del modal */
  overlay: { // NUEVO
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: { // NUEVO
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: { // NUEVO
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  label: { // NUEVO
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: { // NUEVO
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
  },
  modalButtons: { // NUEVO
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: { // NUEVO
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  saveButton: { // NUEVO
    backgroundColor: '#4CAF50',
  },
  cancelButton: { // NUEVO
    backgroundColor: '#f44336',
  },
  buttonText: { // NUEVO
    color: '#fff',
    fontWeight: 'bold',
  },
});

