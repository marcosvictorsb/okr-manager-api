import { ITeamRepository, IGetTeamsGateway, GetTeamsGatewayParams, FindCriteria } from '../interfaces/';
import { TeamEntity } from '../entities/team.entity';
import { MixGetTeamsService } from '../../../adapters/gateways/';


export class GetTeamsGateway extends MixGetTeamsService implements IGetTeamsGateway {
  teamRepository: ITeamRepository;

  constructor(params: GetTeamsGatewayParams) {
    super(params);
    this.teamRepository = params.repository;
  }

  async getTeams(data: FindCriteria): Promise<TeamEntity[] | null> {
    return this.teamRepository.findAll(data);
  }
}
