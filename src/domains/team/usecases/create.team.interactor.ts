import { ICreateTeamGateway, CreateTeamInput, FindCriteria, InsertCriteria } from '../interfaces';
import { IPresenter } from '../../../protocols/presenter';
import { HttpResponse } from '../../../protocols/http';

export class CreateTeamInteractor {
  constructor(private readonly gateway: ICreateTeamGateway, private presenter: IPresenter) {}

  async execute(input: CreateTeamInput): Promise<HttpResponse> {
    this.gateway.loggerInfo('Iniciando a criação do time', { data: JSON.stringify(input) });
    try {
      const { name, id_company } = input;
      const criteria: FindCriteria = {  name, id_company };
      const teamExists = await this.gateway.findTeam(criteria);
      if (teamExists) {
        return this.presenter.conflict('Time já existe');
      }

      const insert: InsertCriteria = { name: input.name, id_company: input.id_company };
      const team = await this.gateway.createTeam(insert);
      if (!team) {
        return this.presenter.badRequest('Não foi possível criar o time');
      }
      this.gateway.loggerInfo('Time criado com sucesso', { data: JSON.stringify(team) });

      return this.presenter.created(team);
    } catch (error) {
      console.log(error)
      this.gateway.loggerInfo('Erro ao criar time', {error});
      return this.presenter.serverError('Erro ao criar time');
    }
  }
}
