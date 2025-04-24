import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../styles/theme';
import { useTodoStore } from '../stores/useTodoStore';
import { TodoItem } from '../components/TodoItem';
import { AddTodo } from '../components/AddTodo';
import { DeleteModal } from '../components/DeleteModal';
import { EditModal } from '../components/EditModal';
import { ShareModal } from '../components/ShareModal';
import { InfoModal } from '../components/InfoModal';
import { Todo } from '../types/todo';



export const TodoScreen = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    showDeleteModal,
    hideDeleteModal,
    confirmDelete,
    deleteModalVisible,
    editTodo,
  } = useTodoStore();

  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Todo | null>(null);
  const [shareVisible, setShareVisible] = useState(false);
  const [taskToShare, setTaskToShare] = useState<Todo | null>(null);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [taskToInfo, setTaskToInfo] = useState<Todo | null>(null);

  const handleAddTodo = (title: string, body: string) => {
    addTodo(title, body);
  };

  const handleEdit = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setTaskToEdit(todo);
      setEditModalVisible(true);
    }
  };

  const handleInfo = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setTaskToInfo(todo);
      setInfoModalVisible(true);
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <AddTodo onAdd={handleAddTodo} />

        {todos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No tasks</Text>
          </View>
        ) : (
          <View style={styles.listContainer}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={showDeleteModal}
                onEdit={handleEdit}
                isActive={activeCardId === todo.id}
                onPressCard={() =>
                  setActiveCardId((prev) => (prev === todo.id ? null : todo.id))
                }
                onShare={() => {
                  setTaskToShare(todo);
                  setShareVisible(true);
                }}
                onInfo={handleInfo}
              />
            ))}
          </View>
        )}
      </ScrollView>

      <DeleteModal
        visible={deleteModalVisible}
        onConfirm={confirmDelete}
        onCancel={hideDeleteModal}
      />

      {taskToEdit && (
        <EditModal
          visible={editModalVisible}
          onClose={() => setEditModalVisible(false)}
          task={taskToEdit}
          onSave={(title, body) => {
            editTodo(taskToEdit.id, title, body);
            setEditModalVisible(false);
          }}
        />
      )}

      {taskToShare && (
        <ShareModal
          visible={shareVisible}
          onClose={() => setShareVisible(false)}
          title={taskToShare.title}
          body={taskToShare.body}
        />
      )}

      {taskToInfo && (
        <InfoModal
          visible={infoModalVisible}
          onClose={() => setInfoModalVisible(false)}
          task={taskToInfo}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  listContainer: {
    padding: 16,
  },
  emptyContainer: {
    width: 100,
    height: 53,
    marginTop: 165,
    marginLeft: 145,
    gap: 12,
    borderBottomWidth: 3,
    borderBottomColor: Colors.primaryLight,
    borderTopColor: Colors.primaryLight,
    borderTopWidth: 3,
    justifyContent: 'center',
  },
  emptyText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
});
