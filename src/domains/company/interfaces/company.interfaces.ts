import { ModelStatic } from "sequelize";
import { CompanyModel } from '../model/company.model'
import { ICompanyRepository } from "./create.company.interface";
import logger from "../../../config/logger";

export type CompanyGatewayDependencies = {
  companyRepository: ICompanyRepository
  logger: typeof logger
}

export type CompanyRepositoryDependencies = {
  model: ModelStatic<CompanyModel>; 
}

