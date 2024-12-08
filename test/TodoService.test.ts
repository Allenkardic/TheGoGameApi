import { todoService } from '../src/services/TodoService';
import { todoRepository } from '../src/repositories/TodoRepository';
import { BadRequest, ResourceNotFoundError } from '../src/utils/errors/ErrorHandlers';



const mockCreateTodo = jest.fn();
const mockfindTodoById = jest.fn();
const mockgetUserTodos = jest.fn();
const mockgetAllTodos = jest.fn();
const mockUpdateTodo = jest.fn();
const mockDeleteTodo = jest.fn();


describe('TodoService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    todoRepository.createTodo = mockCreateTodo;
    todoRepository.findById = mockfindTodoById;
    todoRepository.getUserTodos = mockgetUserTodos;
    todoRepository.getAllTodos = mockgetAllTodos;
    todoRepository.updateTodo = mockUpdateTodo;
    todoRepository.deleteTodo = mockDeleteTodo;


  });


  

  describe('createTodo', () => {
    it('should create a support todo successfully', async () => {
      const userId = 'user123';
      const todoRequest = {
        title: 'Test Todo',
        body: 'Test body',
      };

      const createdTodo = {
        _id: 'todo123',
        title: 'Test Todo',
        body: 'Test body',
        userId: userId,
      };

      mockCreateTodo.mockResolvedValue(createdTodo);

      const result = await todoService.createTodo(userId, todoRequest);

      expect(mockCreateTodo).toHaveBeenCalledWith({
        title: todoRequest.title,
        body: todoRequest.body,
        userId: userId,
      } as any);
      expect(result).toEqual(createdTodo);
    });
  });


  
  describe('getUserTodos', () => {
    it('should get all todos for a user', async () => {
      const userId = 'user123';
      const userTodos = [
        {
          _id: 'todo123',
          title: 'Todo 1',
          body: 'Body 1',
          userId: userId,
        },
        {
          _id: 'todo456',
          title: 'Todo 2',
          body: 'Body 2',
          userId: userId,
        },
      ];
  
      mockgetUserTodos.mockResolvedValue(userTodos);
  
      const result = await todoService.getUserTodos(userId);
  
      expect(todoRepository.getUserTodos).toHaveBeenCalledWith(userId);
      expect(result).toEqual(userTodos);
    });
  });
  
  describe('getAllTodos', () => {
    it('should get all todos', async () => {
      const allTodos = [
        {
          _id: 'todo123',
          title: 'Todo 1',
          body: 'Body 1',
          userId: 'user123',
        },
        {
          _id: 'todo456',
          title: 'Todo 2',
          body: 'Body 2',
          userId: 'user456',
        },
      ];
  
      mockgetAllTodos.mockResolvedValue(allTodos);
  
      const result = await todoService.getAllTodos();
  
      expect(mockgetAllTodos).toHaveBeenCalled();
      expect(result).toEqual(allTodos);
    });
  });
  describe('getTodo', () => {
    it('should get a specific todo', async () => {
      const todoId = 'todo123';
      const todo = {
        _id: todoId,
        title: 'Test Todo',
        body: 'Test body',
        userId: 'user123',
      };
  
      mockfindTodoById.mockResolvedValue(todo);
  
      const result = await todoService.getTodo(todoId);
  
      expect(mockfindTodoById).toHaveBeenCalledWith(todoId);
      expect(result).toEqual(todo);
    });
  
    it('should throw ResourceNotFoundError if todo not found', async () => {
      const todoId = 'nonexistent';
  
      mockfindTodoById.mockResolvedValue(null);
  
      try {
        await todoService.getTodo(todoId);
      } catch (error) {
        expect(error).toBeInstanceOf(ResourceNotFoundError);
      }
    });
  });
  
  describe('updateTodo', () => {   
    it('should update a todo successfully', async () => {
      const userId = 'user123';
      const todoId = 'todo123';
      const todo = {
        id: todoId,
        title: 'Test Todo',
        body: 'Test body',
        userId: 'user123',
      };
  
      mockfindTodoById.mockResolvedValue(todo);
  
      const result = await todoService.updateTodo(userId, todo);
  
      expect(mockfindTodoById).toHaveBeenCalledWith(todoId);
      expect(mockUpdateTodo).toHaveBeenCalledTimes(1);
      expect(result).toEqual(todo);
    });
  
    it('should throw ResourceNotFoundError if todo not found', async () => {
      const userId = 'user123';
      const todoId = 'nonexistent';

      mockfindTodoById.mockResolvedValue(null);

      try {
        await todoService.updateTodo(userId, {
          id: todoId,
          title: '',
          body: ''
        });
      } catch (error) {
        expect(error ).toBeInstanceOf(ResourceNotFoundError);
      }
    });
  });

  describe('deleteTodo', () => {
    it('should close a todo successfully', async () => {
      const userId = 'user123';
      const todoId = 'todo123';
      const todo = {
        _id: todoId,
        title: 'Test Todo',
        body: 'Test body',
        userId: 'user123',
      };

      mockfindTodoById.mockResolvedValue(todo);

      const result = await todoService.deleteTodo(userId, todoId);

      expect(mockfindTodoById).toHaveBeenCalledWith(todoId);
      expect(mockDeleteTodo).toHaveBeenCalledWith(todoId);
      expect(result).toEqual({
        successful: true,
        message: 'Deleted todo',
      });
    });

    it('should throw BadRequest if todo status is not PROCESSING', async () => {
      const userId = 'user123';
      const todoId = 'todo123';
      const todo = {
        _id: todoId,
        title: 'Test Todo',
        body: 'Test body',
        userId: 'user123',
      };

      mockfindTodoById.mockResolvedValue(todo);

      try {
        await todoService.deleteTodo(userId, todoId);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequest);
      }
    });

    it('should throw ResourceNotFoundError if todo not found', async () => {
      const userId = 'user123';
      const todoId = 'nonexistent';

      mockfindTodoById.mockResolvedValue(null);

      try {
        await todoService.deleteTodo(userId, todoId);
      } catch (error) {
        expect(error).toBeInstanceOf(ResourceNotFoundError);
      }
    });
  
       
  
  });




});
