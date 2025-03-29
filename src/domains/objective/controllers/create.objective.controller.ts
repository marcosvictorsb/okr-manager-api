import { Request, Response } from 'express';
import { CreateObjectiveInteractor } from '../usecases/create.objective.interactor';
import { CreateObjectiveControllerParams, CreateObjectiveInput } from '../interfaces/create.objective.interface';

interface ICreateObjectiveController {
  createObjective(request: Request, response: Response): Promise<Response>;
}

export class CreateObjectiveController implements ICreateObjectiveController {
  protected interactor: CreateObjectiveInteractor;

  constructor(params: CreateObjectiveControllerParams) {
    this.interactor = params.interactor;
  }

  public async createObjective(request: Request, response: Response): Promise<Response> {
    const { name, quarter, year, id_company, id_team } = request.body;
    const input: CreateObjectiveInput = {
      name,
      quarter,
      year,
      id_company,
      id_team,
    }
    const result = await this.interactor.execute(input);
    return response.status(result.status).json(result.body);
  }
}
