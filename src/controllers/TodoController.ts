
import { ITodo } from '../entities';
import TodoRequest from '../interfaces/ITodoRequest';

import { Response } from 'express';
import { todoService } from '../services';

import { HandleErrorResponse } from '../utils/errors/ErrorHandlers';
import { IAuthRequest } from '../interfaces/IRequest';
import { StatusResponse } from '../interfaces/IResponse';



export const TodoController = {



  async createTodo(request: IAuthRequest, response: Response) {
    try {
    
      const requestBody = request.body as unknown as TodoRequest;
      const userId = request.principal as unknown as string;
    
      const todoResponse: ITodo = await todoService.createTodo(userId, requestBody);
      return response.status(201).json(todoResponse);
    } catch (error) {
      return HandleErrorResponse(error, response);
    }
  },



  async getUserTodos(request: IAuthRequest, response: Response) {
    try {

      const userId = request.principal as unknown as string;
      const todoResponse: ITodo[] = await todoService.getUserTodos(userId);
      return response.status(200).json(todoResponse);
    } catch (error) {
      return HandleErrorResponse(error, response);
    }
  },

  async getTodo(request: IAuthRequest, response: Response) {
    try {

      const todoId = request.params.todoId as string;
      const todoResponse: ITodo = await todoService.getTodo(todoId);
      return response.status(200).json(todoResponse);
    } catch (error) {
      return HandleErrorResponse(error, response);
    }
  },


  async updateTodo(request: IAuthRequest, response: Response) {
    try {

      const userId = request.principal as unknown as string;
      const requestBody = request.body as unknown as TodoRequest;
      const todoId = request.params.todoId as string;


      const todoResponse = await todoService.updateTodo(userId, {...requestBody, id : todoId});
      return response.status(200).json(todoResponse);
    } catch (error) {
      return HandleErrorResponse(error, response);
    }
  },


  async deleteTodo(request: IAuthRequest, response: Response) {
    try {

      const userId = request.principal as unknown as string;
      const todoId = request.params.todoId as string;


    
      const todoResponse: StatusResponse = await todoService.deleteTodo(userId, todoId);
      return response.status(200).json(todoResponse);
    } catch (error) {
      return HandleErrorResponse(error, response);
    }
  },

  async getAllTodos(request: IAuthRequest, response: Response) {
    try {
    
      const todoResponse: ITodo[] = await todoService.getAllTodos();
      return response.status(200).json(todoResponse);
    } catch (error) {
      return HandleErrorResponse(error, response);
    }
  },



};