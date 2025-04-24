import { Todo } from '../types/todo.ts';

export type RootStackParamList = {
  Home: undefined;
  TaskDetail: { 
    task: Todo;
    onSave: (id: string, title: string, body: string) => void;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}