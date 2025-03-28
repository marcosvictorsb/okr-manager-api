import { Request, Response, Router } from 'express';
import * as controllers from '../factories/'

const router = Router();

router.post("/", (request: Request, response: Response) => controllers.createTeamController.createTeam(request, response));
router.get("/", (request, response) => controllers.getTeamsController.getTeams(request, response));

export default router;