import { Request, Response, Router } from 'express';
import * as controllers from '../factories';
import { createResultKeySchema } from '../validator';
import { validate } from '../../../validator/validate'

const router = Router();

router.post("/", validate(createResultKeySchema),(request: Request, response: Response) =>  controllers.createResultKeyController.crateResultKey(request, response));

export default router;