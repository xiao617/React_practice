import axios, {AxiosResponse} from 'axios';
import TodoPage from '../pages/TodoPage';
import { TodoBody,TodoResponse } from '../types/todo';

export class NodeService{
    async getTodo(){
        //Read
        try{
            const res = await axios.get<TodoResponse>('/todos');
            return Promise.resolve(res);
        }
        catch(err){
            return Promise.reject(`${err}`)
        }
    }
    async postTodo(todoObject:TodoBody){
        //Create 
        try{
            const res = await axios.post<TodoResponse>('/todos',todoObject);
            return Promise.resolve(res);
        }
        catch(err){
            return Promise.reject(`${err}`);
        }
    }
    async putTodo(todoObject: TodoBody){
        //Update
        try{
            const res = await axios.put<TodoResponse>(`/todos/${todoObject.id}`,todoObject);
            return Promise.resolve(res);
        }
        catch(err){
            return Promise.reject(`${err}`);
        }
    }
    async deleteTodo(todoObject: TodoBody){
        //Delete
        try{
            const res = await axios.delete<TodoResponse>(`/todos/${todoObject.id}`);
            return Promise.resolve(res);
        }
        catch(err){
            return Promise.reject(`${err}`);
        }
    }

}