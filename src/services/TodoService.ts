
import {  ResourceNotFoundError } from '../utils/errors/ErrorHandlers';
import { StatusResponse } from '../interfaces/IResponse';
import TodoRequest from '../interfaces/ITodoRequest';
import { ITodo } from '../entities';
import { todoRepository } from '../repositories/TodoRepository';


export const todoService = {


  async createTodo(userId: string, todo: TodoRequest): Promise<ITodo>{

    const createdTodo = await todoRepository.createTodo({
      title: todo.title,
      body: todo.body,
      userId: userId
    } as unknown as ITodo);

    return Promise.resolve(createdTodo);
            
  },


  async getUserTodos(userId: string): Promise<ITodo[]>{
    const todos = await todoRepository.getUserTodos(userId);

    return Promise.resolve(todos);
            
  },

  async getAllTodos(): Promise<ITodo[]>{
    const todos = await todoRepository.getAllTodos();

    return Promise.resolve(todos);
            
  },


  async getTodo(todoId: string): Promise<ITodo>{

    const todo = await todoRepository.findById(todoId);
    if(!todo){
      throw new ResourceNotFoundError({message: 'Todo not found'});
    }
    return Promise.resolve(todo);
            
  },


  async updateTodo(userId: string,todo: TodoRequest): Promise<ITodo| null>{

    let todoExists = await todoRepository.findById(todo.id!);

    if(!todoExists){
      throw new ResourceNotFoundError({message: 'Todo not found'});
    }

    await todoRepository.updateTodo( todo.id!, {
      title: todo.title,
      body: todo.body,
    }as unknown as ITodo);
    todoExists = await todoRepository.findById(todo.id!);
    return Promise.resolve(todoExists);

  },


  async deleteTodo(userId: string, todoId: string): Promise<StatusResponse>{

    const todo: ITodo | null = await todoRepository.findById(todoId);

    if(!todo){
      throw new ResourceNotFoundError({message: 'Todo not found'});
    }

    await todoRepository.deleteTodo( todoId);
    return Promise.resolve({successful: true, message: 'Deleted todo'});


            
  },




};