import { Request, Response } from 'express';
import { GetTeamsInteractor } from '../usecases/get.teams.interactor';
import { GetTeamsControllerDependencies, GetTeamsInput } from '../interfaces/';

interface IGetTeamsController {
  getTeams(request: Request, response: Response): Promise<Response>;
}

export class GetTeamsController implements IGetTeamsController {
  protected interactor: GetTeamsInteractor;

  constructor(params: GetTeamsControllerDependencies) {
    this.interactor = params.interactor;
  }

  public async getTeams(request: Request, response: Response): Promise<Response> {
    const { limit, id_company } = request.query;
    const input: GetTeamsInput = { 
      limit: limit ? Number(limit) : 25, 
      id_company: Number(id_company)
    };
    const result = await this.interactor.execute(input);
    return response.status(result.status).json(result.body);
  }
}
