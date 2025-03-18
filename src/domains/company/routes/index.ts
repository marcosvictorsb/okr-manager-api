import { Request, Response, Router } from 'express'
import { createCompanyController } from '../factories';

const router = Router();

router.post('/', (request: Request, response: Response) => createCompanyController.registerCompany(request, response));


export default router


