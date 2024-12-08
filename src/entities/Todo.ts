import mongoose from 'mongoose';


export interface ITodo extends mongoose.Document {
    title: string,
    body: string,
    userId: string;


}

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      index: true,
      required: true
    },
    body: {
      type: String,
      index: false,
      required: true
    },
    
    userId: {
      type: String,
      index: true,
      required: true
    },
  },
  {
    timestamps: true,
  }
);
  
  
  
const Todo = mongoose.model<ITodo>('todo', todoSchema);
export { Todo };