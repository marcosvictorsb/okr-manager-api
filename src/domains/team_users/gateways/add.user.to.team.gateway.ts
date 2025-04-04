import { ITeamUserRepository, IAddUserToTeamGateway, AddUserToTeamGatewayParams, InsertCriteria, FindCriteria } from '../interfaces/';
import { TeamUserEntity } from '../entities/team.user.entity';
import { MixAddUserToTeamService } from '../../../adapters/gateways/add.user.to.team.gateway';

export class AddUserToTeamGateway extends MixAddUserToTeamService implements IAddUserToTeamGateway {
  teamUserRepository: ITeamUserRepository;

  constructor(params: AddUserToTeamGatewayParams) {
    super(params);
    this.teamUserRepository = params.repository;
  }

  async addUserToTeam(data: InsertCriteria): Promise<TeamUserEntity> {
    return await this.teamUserRepository.create(data);
  }

  async findUserInTeam(criteria: FindCriteria): Promise<TeamUserEntity | null> {
    return await this.teamUserRepository.find(criteria);
  }
}
