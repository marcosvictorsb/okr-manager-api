import { Request, Response } from 'express';
import { AddUserToTeamInteractor } from '../usecases/add.user.to.team.interactor';
import { AddUserToTeamControllerParams, InputAddUserToTeam } from '../interfaces/add.user.to.team.interface';

interface IAddUserToTeamController {
  addUserToTeam(request: Request, response: Response): Promise<Response>;
}

export class AddUserToTeamController implements IAddUserToTeamController {
  protected interactor: AddUserToTeamInteractor;

  constructor(params: AddUserToTeamControllerParams) {
    this.interactor = params.interactor;
  }

  public async addUserToTeam(request: Request, response: Response): Promise<Response> {
    const { id_company, id_team, id_user } = request.body;
    const input: InputAddUserToTeam = { id_company, id_team, id_user };
    const result = await this.interactor.execute(input);
    return response.status(result.status).json(result.body);
  }
}
