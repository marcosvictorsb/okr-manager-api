import { IAddUserToTeamGateway, InsertCriteria, FindCriteria } from '../interfaces/';
import { IPresenter } from '../../../protocols/presenter';
import { HttpResponse } from '../../../protocols/http';
import { InputAddUserToTeam } from '../interfaces/';

export class AddUserToTeamInteractor {
  constructor(private readonly gateway: IAddUserToTeamGateway, private presenter: IPresenter) {}

  async execute(input: InputAddUserToTeam): Promise<HttpResponse> {
    this.gateway.loggerInfo('Iniciando a requisição para adicionar o usuário no time', { data: JSON.stringify(input) });

    try {
      const { id_company, id_team, id_user } = input;
      const criteria: FindCriteria = { id_company, id_team, id_user };      
      const userAlreadyInTeam = await this.gateway.findUserInTeam(criteria);
      if (userAlreadyInTeam) {
        this.gateway.loggerInfo('Usuário já está adicionado ao time', { data: JSON.stringify(input) });
        return this.presenter.conflict('Usuário já está adicionado ao time');
      }
      
      const insertCriteria: InsertCriteria = { id_company, id_team, id_user };
      const userAdded = await this.gateway.addUserToTeam(insertCriteria);
      this.gateway.loggerInfo('Usuário adicionado ao time com sucesso', { data: JSON.stringify(userAdded) });

      return this.presenter.created(userAdded);
    } catch (error) {
      this.gateway.loggerInfo(`Erro ao adicionar usuário: ${input.id_user} no time: ${input.id_team} `, error);
      return this.presenter.serverError('Erro ao adicionar usuário no time');
    }
  }
}
