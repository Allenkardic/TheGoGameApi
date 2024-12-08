import express from 'express';

import { handleUnhandledError, unknownRouteError } from '../utils/errors/ErrorHandlers';
import { Validator } from '../middlewares/Validator';
import { createTodoValidator } from '../validators/Todo';
import { TodoController } from '../controllers/TodoController';
import { Security } from '../middlewares/Security';


const router: express.Router = express.Router();

router.use('/health', (req, res) => {
  res.send({status: 'OK'});
});

router.post(
  '/todo/',
  Security.validUserSession(),
  Validator.validate(createTodoValidator),
  TodoController.createTodo
);

router.get(
  '/todo/',
  Security.validUserSession(),
  TodoController.getUserTodos
);


router.get(
  '/todo/:todoId',
  Security.validUserSession(),
  TodoController.getTodo
);

router.put(
  '/todo/:todoId',
  Security.validUserSession(),
  TodoController.updateTodo
);

router.delete(
  '/todo/:todoId',
  Security.validUserSession(),
  TodoController.deleteTodo
);

router.get(
  '/todo/all/',
  Security.validUserSession(),
  TodoController.getAllTodos
);


router.use(unknownRouteError);

router.use(handleUnhandledError);
export default router;
