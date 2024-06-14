import axios from "axios";
import { BASE_API_URL } from "@/const";

import type { TodoItem } from "@/types/todo";

export class TodoService {
  static async all() {
    try {
      const response = await axios.get(`${BASE_API_URL}/todos`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async add(payload: Pick<TodoItem, "title" | "completed">) {
    try {
      const response = await axios.post(`${BASE_API_URL}/todos`, payload);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async remove(id: string) {
    try {
      const response = await axios.delete(`${BASE_API_URL}/todos/${id}`);
      return response.status === 200;
    } catch (error) {
      console.error(error);
    }
  }
}
