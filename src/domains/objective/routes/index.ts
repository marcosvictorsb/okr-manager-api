import { Request, Response, Router } from 'express'
import * as controllers from '../factories'
import { validate } from '../../../validator/validate';
import { createObjectiveSchema } from '../validator/objective.schemas';

const router = Router()
router.post('/',
  validate(createObjectiveSchema), 
  (request: Request, response: Response) => controllers.createObjectiveController.createObjective(request, response))

export default router;