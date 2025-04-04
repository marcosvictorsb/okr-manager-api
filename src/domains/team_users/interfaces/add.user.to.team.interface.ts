import logger from '../../../config/logger';
import { TeamUserEntity } from '../entities/team.user.entity';
import { AddUserToTeamInteractor } from '../usecases/add.user.to.team.interactor';
import { FindCriteria, InsertCriteria, ITeamUserRepository } from './user.team.interface';


export type InputAddUserToTeam = {
  id_company: number;
  id_team: number;
  id_user: number;
};

export type AddUserToTeamGatewayParams = {
  repository: ITeamUserRepository;
  logger: typeof logger;
};

export type AddUserToTeamControllerParams = {
  interactor: AddUserToTeamInteractor;
}

export interface IAddUserToTeamGateway {
  addUserToTeam(data: InsertCriteria): Promise<TeamUserEntity>;
  findUserInTeam(criteria: FindCriteria): Promise<TeamUserEntity | null>
  loggerInfo(message: string, data?: unknown): void;
  loggerErro(message: string, data?: unknown): void;
}
