import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import HeaderNav from './components/HeaderNav';
import React, { useState } from 'react';
import { BRAWLER_DATA } from './data/brawlers-data';
import Brawler from './components/Brawler';
import { BrawlerItem } from './types/BrawlerItem';


export default function App() {
  
  const [brawlers, setBrawlers] = useState<BrawlerItem[]>(BRAWLER_DATA);

   const handleDelete = (name: string) => {
    setBrawlers((prevBrawlers) => prevBrawlers.filter((b) => b.name !== name));
  };

  return (
    <>
      <HeaderNav />
      
      <View style={styles.container}>
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
