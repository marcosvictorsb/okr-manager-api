import logger from '../../../config/logger';
import { ObjectiveEntity } from '../entities/objective.entity';
import { CreateObjectiveInteractor } from '../usecases/create.objective.interactor';
import { InsertCriteria } from './objective.interface';
import { IObjectiveRepository } from './objective.interface';

export type CreateObjectiveInput = {
  name: string;
  quarter: string;
  year: string; 
  id_company: number;
  id_team: number;
};

export type CreateObjectiveControllerParams = {
  interactor: CreateObjectiveInteractor
};

export type CreateObjectiveGatewayParams = {
  repository: IObjectiveRepository;
  logger: typeof logger;
};

export interface ICreateObjectiveGateway {
  createObjective(data: InsertCriteria): Promise<ObjectiveEntity>;
  loggerInfo(message: string, data?: unknown): void;
  loggerErro(message: string, data?: unknown): void;
}
