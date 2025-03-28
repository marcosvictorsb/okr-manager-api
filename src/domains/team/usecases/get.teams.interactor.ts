import { IGetTeamsGateway, FindCriteria } from '../interfaces/';
import { IPresenter } from '../../../protocols/presenter';
import { HttpResponse } from '../../../protocols/http';
import { GetTeamsInput } from '../interfaces/';
import { TeamEntity } from '../entities/team.entity';

export class GetTeamsInteractor {
  constructor(private readonly gateway: IGetTeamsGateway, private presenter: IPresenter) {}

  async execute(input: GetTeamsInput): Promise<HttpResponse> {
    console.log(this.gateway)
    this.gateway.loggerInfo('Recebendo dados para buscar times',{ input: JSON.stringify(input)  } );

    try {
      const { limit, id_company } = input;
      const data: FindCriteria = { limit, id_company };
      const teams = await this.gateway.getTeams(data);
      if(!teams) {
        return this.presenter.notFound('Times não encontrados');
      }

      this.gateway.loggerInfo('Times encontrados', { teamsIds: JSON.stringify(teams.map((team) => team.id)) });
      return this.presenter.OK(teams.map((team: TeamEntity) => ({
        id: team.id,
        name: team.name,
        id_company: team.id_company
      })));
    } catch (error) {
      console.log(error);
      this.gateway.loggerInfo('Erro ao buscar os times', error);
      return this.presenter.serverError('Erro ao buscar os times');
    }
  }
}
