import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HeaderNav() {

    return (
        <View style={styles.header}>
            <Pressable>
                <Ionicons name="add-circle-outline" size={30} color="black"/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flex: 4,
    backgroundColor: '#000',
  },
});
