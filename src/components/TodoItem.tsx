import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from '../styles/theme';
import { Icons } from '../utils/IconUtils';


interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    body?: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  isActive: boolean;
  onPressCard: () => void;
  onShare: () => void;
  onInfo: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
  isActive,
  onPressCard,
  onShare,
  onInfo,
}) => {
  

  return (
    <View style={styles.wrapper}>
      <View style={[styles.item]}>
        <TouchableOpacity onPress={() => onToggle(todo.id)} style={styles.checkbox}>
          {todo.completed && <View style={styles.checkboxInner} />}
        </TouchableOpacity>

       
        <TouchableOpacity onPress={onPressCard} style={styles.content} activeOpacity={0.9}>
          <Text style={[styles.title, todo.completed && styles.completedText]}>{todo.title}</Text>
          {!!todo.body && (
            <Text style={[styles.body, todo.completed && styles.completedText]}>{todo.body}</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDelete(todo.id)} >
          <Image source={Icons.close} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>


      {isActive && (
        <View style={styles.popupActions}>
          <TouchableOpacity onPress={onShare} >
            <Image source={Icons.share} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onInfo(todo.id)} >
            <Image source={Icons.info} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onEdit(todo.id)} >
            <Image source={Icons.edit} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    position: 'relative',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 72,
    backgroundColor: Colors.backgroundMedium,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
  },

  checkbox: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 4,
    margin: 16,
  },

  checkboxInner: {
    width: 20,
    height: 20,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    margin: 4,
  },

  content: {
    flex: 1,
    margin: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.light,
    fontFamily: 'Roboto',
  },

  body: {
    fontSize: 14,
    color: Colors.light,
    opacity: 0.8,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#9E9E9E',
  },

  deleteIcon: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 4,
    margin: 16,
  },

  popupActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    gap: 8,
    paddingHorizontal: 4,
  },

  icon: {
    width: 36,
    height: 36,
  },
});