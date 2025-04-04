import { Request, Response, Router } from 'express';
import * as controllers from '../factories';

const router = Router();

router.post("/", 
  (request: Request, response: Response) => 
    controllers.addUserToTeamController.addUserToTeam(request, response));


export default router;