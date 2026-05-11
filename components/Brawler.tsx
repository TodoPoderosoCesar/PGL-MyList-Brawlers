import { StyleSheet, Image, Text, View, Pressable, Alert, ImageSourcePropType } from 'react-native';
import React from 'react';
import { BrawlerItem } from '../types/BrawlerItem';

type BrawlerProps = {
    image: ImageSourcePropType;
    name: string;
    rarity: string;
    credits: number;
    onDelete: (id: string) => void;
    onEdit: (brawler: BrawlerItem) => void;
    id: string;
};

const Brawler: React.FC<BrawlerProps> = ({ image, name, rarity, credits, onDelete, onEdit, id }) => {

  const confirmDelete = () => {
    Alert.alert(
      'Eliminar brawler',
      `¿Seguro que quieres eliminar a ${name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => onDelete(id),
        },
      ]
    );
  };

  const rarityStyles: Record<string, object> = {
    ultralegendario: styles.ultralegendario,
    legendario: styles.legendario,
    mítico: styles.mitico,
    épico: styles.epico,
    superespecial: styles.superespecial,
    especial: styles.especial,
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.header}>
          <Image source={image} style={styles.headerImage} />
          <Text style={[styles.headerTitle, rarityStyles[rarity]]}>{name}</Text>
        </View>
        <Text style={styles.bodyInfo}>Categoría: {rarity}</Text>
        <Text style={styles.bodyInfo}>Créditos: {credits}</Text>
      </View>
      <View style={styles.right}>
        <Pressable
          style={({ pressed }) => [styles.actionButton, styles.editButton, pressed && styles.pressed]}
          onPress={() => onEdit({ id, image, name, rarity, credits })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.actionButton, styles.deleteButton, pressed && styles.pressed]}
          onPress={confirmDelete}
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Brawler;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 5,
        marginTop: 15,
        width: 380,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        height: 200,
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center',
    },
    right: {
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        paddingRight: 8,
    },
    header: {
        alignItems: 'center',
    },
    headerImage: {
        width: 120,
        height: 90,
        resizeMode: 'contain',
    },
    headerTitle: {
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bodyInfo: {
        fontSize: 14,
        marginLeft: 5,
        textTransform: 'capitalize',
        marginTop: 6,
        color: '#333',
    },
    actionButton: {
        width: '90%',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: '#4a90d9',
    },
    deleteButton: {
        backgroundColor: '#d50000',
    },
    pressed: {
        opacity: 0.75,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        textTransform: 'uppercase',
    },
    // Estilos de rareza
    ultralegendario: { color: '#555' },
    legendario: { color: '#c8a800' },
    mitico: { color: '#cc0000' },
    epico: { color: '#cc00cc' },
    superespecial: { color: '#0011ff' },
    especial: { color: '#0a9900' },
});