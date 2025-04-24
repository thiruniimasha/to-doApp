import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../styles/theme';
import { Icons } from '../utils/IconUtils';


interface AddTodoFormProps {
  onAdd: (title: string, body: string) => void;
}

export const AddTodo: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title, body);
      setTitle('');
      setBody('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          placeholder="Title..."
          placeholderTextColor={Colors.light}
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input,]}
          placeholder="About..."
          placeholderTextColor={Colors.light}
          value={body}
          onChangeText={setBody}
        />
      </View>

      <TouchableOpacity onPress={handleAdd} >
        <Image source={Icons.add} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 370,
    height: 70,
    gap: 8,
    margin: 23,
  },

  inputContainer: {
    flex: 1,
    height: 70,
    gap: 6,
  },

  input: {
    backgroundColor: Colors.backgroundMedium,
    color: Colors.light,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    padding: 7,
    paddingLeft: 14,
    height: 32,
  },

  addIcon: {
    color: Colors.primaryLight,
    width: 70,
    height: 70,
  },
});