import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Modal, Pressable, TextInput } from 'react-native';
import HeaderNav from './components/HeaderNav';
import React, { useState } from 'react';
import { BRAWLER_DATA } from './data/brawlers-data';
import Brawler from './components/Brawler';
import { BrawlerItem } from './types/BrawlerItem';

const EMPTY_FORM: BrawlerItem = {
  id: '',
  image: require('./assets/interrogante.png'),
  name: '',
  rarity: '',
  credits: 0,
};

export default function App() {
  const [brawlers, setBrawlers] = useState<BrawlerItem[]>(BRAWLER_DATA);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editingBrawler, setEditingBrawler] = useState<BrawlerItem | null>(null);
  const [brawlerForm, setBrawlerForm] = useState<BrawlerItem>(EMPTY_FORM);

  // Abre el modal en modo "añadir"
  const openAddModal = () => {
    setEditingBrawler(null);
    setBrawlerForm(EMPTY_FORM);
    setModalVisible(true);
  };

  // Abre el modal en modo "editar" con los datos del brawler seleccionado
  const openEditModal = (brawler: BrawlerItem) => {
    setEditingBrawler(brawler);
    setBrawlerForm(brawler);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditingBrawler(null);
    setBrawlerForm(EMPTY_FORM);
  };

  const handleSave = () => {
    if (!brawlerForm.name.trim() || !brawlerForm.rarity.trim()) return;

    if (editingBrawler) {
      // Modo editar: sustituir el brawler por su id
      setBrawlers((prev) =>
        prev.map((b) => (b.id === editingBrawler.id ? { ...brawlerForm } : b))
      );
    } else {
      // Modo añadir: generar id único y añadir al final
      const newBrawler: BrawlerItem = {
        ...brawlerForm,
        id: Date.now().toString(),
      };
      setBrawlers((prev) => [...prev, newBrawler]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    setBrawlers((prev) => prev.filter((b) => b.id !== id));
  };

  const isEditing = editingBrawler !== null;

  return (
    <>
      <StatusBar style="dark" />
      <HeaderNav setDisplayAddBrawlerModal={openAddModal} />

      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>
                {isEditing ? `Editar ${editingBrawler!.name}` : 'Agregar nuevo Brawler'}
              </Text>

              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                style={styles.input}
                placeholder="Introduce el nombre"
                value={brawlerForm.name}
                onChangeText={(text) => setBrawlerForm({ ...brawlerForm, name: text })}
              />

              <Text style={styles.label}>
                Rareza (especial, superespecial, épico, mítico, legendario, ultralegendario):
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Rareza"
                value={brawlerForm.rarity}
                onChangeText={(text) => setBrawlerForm({ ...brawlerForm, rarity: text })}
              />

              <Text style={styles.label}>Créditos:</Text>
              <TextInput
                style={styles.input}
                placeholder="Introduce los créditos"
                keyboardType="numeric"
                value={brawlerForm.credits === 0 ? '' : brawlerForm.credits.toString()}
                onChangeText={(text) =>
                  setBrawlerForm({ ...brawlerForm, credits: parseInt(text) || 0 })
                }
              />

              <View style={styles.modalButtons}>
                <Pressable
                  style={({ pressed }) => [
                    styles.button,
                    isEditing ? styles.editSaveButton : styles.saveButton,
                    pressed && styles.pressed,
                  ]}
                  onPress={handleSave}
                >
                  <Text style={styles.buttonText}>
                    {isEditing ? 'Actualizar' : 'Guardar'}
                  </Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.button, styles.cancelButton, pressed && styles.pressed]}
                  onPress={closeModal}
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Brawler
              id={item.id}
              image={item.image}
              name={item.name}
              rarity={item.rarity}
              credits={item.credits}
              onDelete={handleDelete}
              onEdit={openEditModal}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Sin brawlers que mostrar</Text>
          }
        />
      </View>
      <View style={styles.footer} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: '#fdf5ad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#7d82e2',
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#222',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    padding: 8,
    marginTop: 5,
    fontSize: 15,
    backgroundColor: '#fafafa',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  editSaveButton: {
    backgroundColor: '#4a90d9',
  },
  cancelButton: {
    backgroundColor: '#e53935',
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
});
