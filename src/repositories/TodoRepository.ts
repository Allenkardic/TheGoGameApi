import { Todo , ITodo} from '../entities/Todo';

export const todoRepository = {


  async createTodo(data: ITodo) : Promise<ITodo>{
    return await new Todo(data).save();
  },


  async getUserTodos(userId: string) : Promise<ITodo[]>{
    return await Todo.find({userId});
  },


  async getAllTodos() : Promise<ITodo[]>{
    return await Todo.find();
  },


  async findById(id: string) : Promise<ITodo| null>{
    return  await Todo.findOne({_id: id});
  },



  async updateTodo( _id: string, todo: ITodo) : Promise<ITodo| null>{

    return await Todo.findByIdAndUpdate({_id}, {
      $set: {
        title: todo.title,
        body: todo.body,
      }
    });
  },


  async deleteTodo(  todoId: string){

    await Todo.deleteOne({_id: todoId});
  }




};