import { Request, Response } from 'express';
import { CreateResultKeyInteractor } from '../usecases/create.result.key.interactor';
import { CreateResultKeyControllerDependencies } from '../interfaces/create.result.key.interface';

interface ICreateResultKeyController {
  crateResultKey(request: Request, response: Response): Promise<Response>;
}

export class CreateResultKeyController implements ICreateResultKeyController {
  protected interactor: CreateResultKeyInteractor;

  constructor(params: CreateResultKeyControllerDependencies) {
    this.interactor = params.interactor;
  }

  public async crateResultKey(request: Request, response: Response): Promise<Response> {
    const result = await this.interactor.execute(request.body);
    return response.status(result.status).json(result.body);
  }
}
