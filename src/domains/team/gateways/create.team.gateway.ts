import { ITeamRepository, ICreateTeamGateway, CreateTeamGatewayParams } from '../interfaces';
import { TeamEntity } from '../entities/team.entity';
import { MixCreateTeamService } from '../../../adapters/gateways/create.team.gateway';
import { FindCriteria, InsertCriteria } from '../interfaces';

export class CreateTeamGateway extends MixCreateTeamService implements ICreateTeamGateway {
  teamRepository: ITeamRepository;

  constructor(params: CreateTeamGatewayParams) {
    super();
    this.teamRepository = params.repository;
  }

  async createTeam(team: InsertCriteria): Promise<TeamEntity> {
    return this.teamRepository.create(team);
  }

  async findTeam(data: FindCriteria): Promise<TeamEntity | null> {
    return this.teamRepository.find(data);
  }
}
