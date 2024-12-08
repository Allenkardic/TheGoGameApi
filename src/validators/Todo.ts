import { body } from 'express-validator';



export const createTodoValidator = [
  body('title', 'title of todo')
    .isLength({
      min: 2,
      max: 100,
    })
    .exists()
    .trim()
    .escape(),
  body('body', 'Body of todo')
    .isLength({
      min: 2,
    })
    .exists()
    .trim()
    .escape(),

      
];