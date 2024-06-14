import axios from "axios";
import { BASE_API_URL } from "@/const";

export class TodoService {
  static async getAll() {
    try {
      const response = await axios.get(`${BASE_API_URL}/todos`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
