import { StyleSheet, Image, Text, View, Pressable, Alert, ImageSourcePropType } from 'react-native'
import React from 'react'
import { BrawlerItem } from '../types/BrawlerItem';

// Destacar el uso de BrawlerItem para los props... GENIALIDAD.

type BrawlerProps = {
    image: ImageSourcePropType,
    name: string,
    rarity: string,
    credits: number,
    onDelete: (name: string) => void;
};

const Brawler: React.FC<BrawlerProps> = (props) => {
  const { image, name, rarity, credits, onDelete } = props;

  const confirmDelete = () => {
    Alert.alert(
      'Eliminar brawler',
      `¿Seguro que quieres eliminar a ${name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => onDelete(name),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
        <View style={styles.left}>
            <View style={styles.header}>
                <Image source={image} style={styles.headerImage}/>
                <Text style={[styles.headerTitle, styles[rarity]]}>{name}</Text>
            </View>
            <Text style={styles.bodyInfo}>categoría: {rarity}</Text>
            <Text style={styles.bodyInfo}>Créditos: {credits}</Text>
        </View>
        <View style={styles.right}>
            <Pressable onPress={() => alert('Por aqui te va a dejar editar el brawler')}>
                <Text style={styles.edit}>editar</Text>
            </Pressable>
            <Pressable onPress={confirmDelete}>
                <Text style={styles.eliminate}>eliminar</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default Brawler;

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#fff',
        margin: 5,
        marginTop: 15,
        width: 380,
        borderRadius: 10,
        elevation: 5,
        height: 250,
        flexDirection: 'row',
    },
    left: {
        marginLeft: 5,
        width: 200,
    },
    right: {
        marginRight: 5,
        marginLeft: 5,
        width: 160,
    },
    header: {
        alignItems: 'center',
        margin: 0
    },
    headerImage: {
        width: 150,
        height: 110,
        resizeMode: 'contain',
    },
    headerTitle: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 0
    },
    bodyInfo: {
        fontSize: 16,
        marginLeft: 5,
        textTransform: 'capitalize',
        marginTop: 10,
        justifyContent: 'center',
    },
    edit: {
        borderWidth: 1,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 40,
        marginBottom: 30,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#b2d2ffff',
        fontSize: 16
    },
    eliminate: {
        borderWidth: 1,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 40,
        marginBottom: 30,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#d50000ff',
        fontSize: 16
    },
    // ******* ESTILOS DE LA RAREZA ********************************************************
    ultralegendario: {
        color: '#000'
    },
    legendario: {
        color: '#ffdd00ff'
    },
    mítico: {
        color: '#ff0000ff'
    },
    épico: {
        color: '#ff00f2ff'
    },
    superespecial: {
        color: '#0011ffff'
    },
    especial: {
        color: '#1cec09ff'
    }
});