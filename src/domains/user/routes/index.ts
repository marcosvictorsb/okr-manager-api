import { Request, Response, Router } from 'express';
import { createUserController } from '../factories/create.user.factory';

const router = Router();

router.post("/", (request: Request, response: Response) => createUserController.create(request, response));
// router.get("/", (request, response) => userController.getUsers(request, response));

export default router;