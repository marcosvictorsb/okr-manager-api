import { Request, Response } from 'express';
import { CreateUserInteractor } from '../usecases/create.user.interactor';
import { UserControllerParams } from '../interfaces/user.interface';

interface ICreateUserController {
  create(request: Request, response: Response): Promise<Response>;
}

export class CreateUserController implements ICreateUserController{
  protected createUser: CreateUserInteractor;

  constructor(params: UserControllerParams) {
    this.createUser = params.useCases.createUser;
  }

  public async create(request: Request, response: Response): Promise<Response> {  
    const { email, password, id_company, name } = request.body; 
    const input = { email, password, id_company, name };
    const result = await this.createUser.execute(input);
    return response.status(result.status).json(result.body);   
  }
}

