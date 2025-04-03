import logger from '../../../config/logger';
import { ResultKeyEntity } from '../entities/result.key.entity';
import { CreateResultKeyInteractor } from '../usecases/create.result.key.interactor';
import { FindResulKeyCriteria, InsertResultKey } from './result.key.interface';
import { IResultKeyRepository } from './result.key.interface';

export type CreateResultKeyInput = {
  name: number
  initial_value: number
  target_value: number
  current_value: number
  id_objective: number
  id_user: number
  id_company: number
};

export type CreateResultKeyControllerDependencies = {
  interactor: CreateResultKeyInteractor
}


export type CrateResultKeyGatewayParams = {
  repository: IResultKeyRepository;
  logger: typeof logger;
};

export interface ICreateResultKeyGateway {
  createResultKey(data: InsertResultKey): Promise<ResultKeyEntity>;
  findResultKey(criteria: FindResulKeyCriteria): Promise<ResultKeyEntity | null>;
  loggerInfo(message: string, data?: unknown): void;
  loggerErro(message: string, data?: unknown): void;
}
