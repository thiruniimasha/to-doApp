import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../styles/theme';
import Modal from 'react-native-modal'; 

interface DeleteModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
    isVisible={visible}
    onBackdropPress={onCancel}
    animationIn="fadeInUp"
    animationOut="fadeOutDown"
    backdropOpacity={0.85}
  animationInTiming={250}
  animationOutTiming={200}
  useNativeDriver
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Delete this task?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button]} onPress={onCancel}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress={onConfirm}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070707',
    opacity: 0.8,
  },

  modalContainer: {
    width: 281,
    height: 143,
    backgroundColor: Colors.backgroundDark,
    borderRadius: 4,
    borderTopColor: Colors.primary,
    borderTopWidth: 4.47,
  },

  modalText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 37.24,
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 45,
    gap: 10,
  },

  button: {
    width: 64,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundMedium,
    borderColor: Colors.primary,
  },

  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: Colors.light,
    fontWeight: '400',
    lineHeight: 18,
  },
});