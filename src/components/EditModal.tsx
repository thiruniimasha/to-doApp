import React, { useState, useEffect } from 'react';
import {View, Text, Modal, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Colors } from '../styles/theme';

interface EditModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (title: string, body: string) => void;
  task: {
    title: string;
    body?: string;
  };
}

export const EditModal: React.FC<EditModalProps> = ({
  visible, onClose, onSave, task,
}) => {
  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body || '');

  useEffect(() => {
    setTitle(task.title);
    setBody(task.body || '');
  }, [task]);

  return (
    <Modal 
    transparent animationType="slide" 
    visible={visible} 
    onRequestClose={onClose}
    >

      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title..."
            placeholderTextColor={Colors.light}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.textarea}
            placeholder="About..."
            placeholderTextColor={Colors.light}
            value={body}
            onChangeText={setBody}
            multiline
            textAlignVertical="top"
          />

          

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                onSave(title, body);
                onClose();
              }}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#070707',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  modalContainer: {
    width: 360,
    backgroundColor: Colors.backgroundDark,
    borderRadius: 8,
    padding: 18,
  },

  input: {
    backgroundColor: Colors.backgroundMedium,
    color: Colors.light,
    width: 324,
    height: 35,
    borderRadius: 4,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingTop: 7,
    paddingLeft: 9,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Roboto',
    textAlign: 'left',
  },

  textarea: {
    backgroundColor: Colors.backgroundMedium,
    color: Colors.light,
    borderRadius: 4,
    height: 343,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingTop: 7,
    paddingLeft: 9,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  cancelButton: {
    width: 64,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundMedium,
    borderColor: Colors.primary,
  },

  saveButton: {
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
    color: Colors.light,
    fontWeight: '400',
    fontSize: 10,
    fontFamily: 'Roboto',
    lineHeight: 18,
    textAlign: 'center',
  },
});
