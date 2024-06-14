export type Filter = "all" | "done" | "undone";

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface Todo {
  items: TodoItem[];
  filter: Filter;
}
