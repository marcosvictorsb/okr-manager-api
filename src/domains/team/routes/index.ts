import { Request, Response, Router } from 'express';
import { createTeamController } from '../factories/create.team.factory';

const router = Router();

router.post("/", (request: Request, response: Response) => createTeamController.createTeam(request, response));
// router.get("/", (request, response) => userController.getUsers(request, response));

export default router;