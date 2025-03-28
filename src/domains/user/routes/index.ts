import { Request, Response, Router } from 'express';
import * as controllers from '../factories';
import { getUsersSchema, validate } from '../validator/';

const router = Router();

router.post("/", (request: Request, response: Response) =>  controllers.createUserController.create(request, response));

router.get("/", 
  validate(getUsersSchema),
  (request: Request, response: Response) => controllers.getUsersController.getUsers(request, response));

export default router;