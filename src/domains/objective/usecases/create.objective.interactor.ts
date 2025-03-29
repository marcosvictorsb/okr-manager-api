import { IPresenter } from '../../../protocols/presenter';
import { HttpResponse } from '../../../protocols/http';
import { CreateObjectiveInput, ICreateObjectiveGateway } from '../interfaces';

export class CreateObjectiveInteractor {
  constructor(private readonly gateway: ICreateObjectiveGateway, private presenter: IPresenter) {}

  async execute(input: CreateObjectiveInput): Promise<HttpResponse> {
    this.gateway.loggerInfo('Iniciado a criação de objetivo', { data: JSON.stringify(input) });

    try {
      const { name, id_company, id_team, quarter, year } = input;
      const criteria: CreateObjectiveInput = {
        name, quarter, year, id_company, id_team,
      };
      const objective = await this.gateway.createObjective(criteria);
      if(!objective) {
        this.gateway.loggerInfo('Erro ao criar objetivo', { data: JSON.stringify(objective) });
        return this.presenter.badRequest('Erro ao criar objetivo');
      }

      this.gateway.loggerInfo('Objetivo criado com sucesso', { data: JSON.stringify(objective) });
      return this.presenter.created(objective);
    } catch (error) {
      this.gateway.loggerInfo('Erro ao criar objetivo', error);
      return this.presenter.serverError('Erro ao criar objetivo');
    }
  }
}
