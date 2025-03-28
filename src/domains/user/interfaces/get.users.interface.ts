import logger from '../../../config/logger';
import { UserEntity } from '../entities/user.entity';
import { GetUsersInteractor } from '../usecases/get.users.interactor';
import { FindCriteria } from './user.interface';
import { IUserRepository } from './user.interface';

export type GetUsersInput = {
  id_company: number;
  limit?: number;
};

export type GetUsersData = {
  // Defina os campos de dados aqui
};

export type GetUsersControllerDependencies = {
  interactor: GetUsersInteractor;
};

export type GetUsersGatewayParams = {
  repository: IUserRepository;
  logger: typeof logger;
};

export interface IGetUsersGateway {
  getUsers(data: FindCriteria): Promise<UserEntity[] | null>;
  loggerInfo(message: string, data?: unknown): void;
  loggerErro(message: string, data?: unknown): void;
}
