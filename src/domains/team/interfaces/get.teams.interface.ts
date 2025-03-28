import logger from '../../../config/logger';
import { TeamEntity } from '../entities/team.entity';
import { GetTeamsInteractor } from '../usecases/get.teams.interactor';
import { FindCriteria } from './team.interface';
import { ITeamRepository } from './team.interface';

export type GetTeamsInput = {
  limit?: number;
  id_company: number;
};


export type GetTeamsGatewayParams = {
  repository: ITeamRepository;
  logger: typeof logger;
};

export type GetTeamsControllerDependencies = {
  interactor: GetTeamsInteractor;
}

export interface IGetTeamsGateway {
  getTeams(data: FindCriteria): Promise<TeamEntity[] | null>;
  loggerInfo(message: string, data?: unknown): void;
  loggerErro(message: string, data?: unknown): void;
}
