import axios, { AxiosResponse } from 'axios';
import { TodoBody, TodoResponse } from '../types/todo';

export class NodeService {
  async getTodo(): Promise<AxiosResponse<TodoResponse>> {
    //Read
    try {
      const res = await axios.get<TodoResponse>('/todos');
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(`${err}`);
    }
  }
  async postTodo(todoObject: TodoBody): Promise<AxiosResponse<TodoResponse>> {
    //Create
    try {
      const res = await axios.post<TodoResponse>('/todos', todoObject);
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(`${err}`);
    }
  }
  async putTodo(todoObject: TodoBody): Promise<AxiosResponse<TodoResponse>> {
    //Update
    try {
      const res = await axios.put<TodoResponse>(`/todos/${todoObject.id}`, todoObject);
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(`${err}`);
    }
  }
  async deleteTodo(todoObject: TodoBody): Promise<AxiosResponse<TodoResponse>> {
    //Delete
    try {
      const res = await axios.delete<TodoResponse>(`/todos/${todoObject.id}`);
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(`${err}`);
    }
  }
}
