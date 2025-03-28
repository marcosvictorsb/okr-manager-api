import logger from '../../../config/logger';
import { TeamEntity } from '../entities/team.entity';
import { CreateTeamInteractor } from '../usecases/create.team.interactor';
import { ITeamRepository, FindCriteria } from './team.interface';

export type CreateTeamInput = {
  name: string;
  id_company: number;  
};


export interface CreateTeamControllerDependencies {
  interactor: CreateTeamInteractor;
}

export type CreateTeamGatewayParams = {
  repository: ITeamRepository;
  logger: typeof logger;
};

export type InsertCriteria = {
  name: string;
  id_company: number;
};

export interface ICreateTeamGateway {
  findTeam(data: FindCriteria): Promise<TeamEntity | null>;
  createTeam(data: InsertCriteria): Promise<TeamEntity>;
  loggerInfo(message: string, data?: unknown): void;
  loggerErro(message: string, data?: unknown): void;
}
