import { Request, Response } from 'express';
import { CreateTeamInteractor } from '../usecases/create.team.interactor';
import { CreateTeamControllerDependencies, CreateTeamInput } from '../interfaces/create.team.interface';

interface ICreateTeamController {
  createTeam(request: Request, response: Response): Promise<Response>;
}

export class CreateTeamController implements ICreateTeamController {
  protected interactor: CreateTeamInteractor;

  constructor(params: CreateTeamControllerDependencies) {
    this.interactor = params.interactor;
  }

  public async createTeam(request: Request, response: Response): Promise<Response> {
    const input: CreateTeamInput = {
      name: request.body.name,
      id_company: request.body.id_company,      
    }
    const result = await this.interactor.execute(input);
    return response.status(result.status).json(result.body);
  }
}
