import { StyleSheet, Image, ImageSourcePropType, Text, View, Button, Pressable, ScrollView, Alert } from 'react-native'
import React from 'react'
import { BrawlerItem } from '../types/BrawlerItem';

// Destacar el uso de BrawlerItem para los props... GENIALIDAD.

const Brawler: React.FC<BrawlerItem> = (props) => {
  const { image, name, rarity, credits } = props;

  return (
    <View>
        <View>
            <Image source={image}/>
            <Text>{name}</Text>
        </View>
        <Text>{rarity}</Text>
        <Text>{credits}</Text>
    </View>
  );
};

export default Brawler;
