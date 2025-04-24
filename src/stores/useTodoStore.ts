import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
  id: string;
  title: string;
  body?: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  deleteModalVisible: boolean;
  todoToDelete: string | null;
  addTodo: (title: string, body: string) => void;
  showDeleteModal: (id: string) => void;
  hideDeleteModal: () => void;
  confirmDelete: () => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, title: string, body: string, priority?: string) => void;
  getTodoById: (id: string) => Todo | undefined;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      deleteModalVisible: false,
      todoToDelete: null,
      addTodo: (title: string, body: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now().toString(),
              title,
              body,
              completed: false,
              
            },
          ],
        })),
      showDeleteModal: (id: string) =>
        set({ deleteModalVisible: true, todoToDelete: id }),
      hideDeleteModal: () =>
        set({ deleteModalVisible: false, todoToDelete: null }),
      confirmDelete: () =>
        set((state) => {
          if (!state.todoToDelete) return state;
          return {
            todos: state.todos.filter((todo) => todo.id !== state.todoToDelete),
            deleteModalVisible: false,
            todoToDelete: null,
          };
        }),
      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      editTodo: (id: string, title: string, body: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, title, body } : todo
          ),
        })),
      getTodoById: (id: string) => {
        return get().todos.find(todo => todo.id === id);
      }
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);