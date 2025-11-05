import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Modal, Pressable } from 'react-native';
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
          visible={displayAddBrawlerModal} >
          {/* // onRequestClose={() => {

          //   setModalVisible(!modalVisible);
          // }}> */}
          <View>
            <View>
              <Text>Hello World!</Text>
              <Pressable
                onPress={() => addBrawler(brawlerForm)}>
                <Text>Hide Modal</Text>
              </Pressable>
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
});
