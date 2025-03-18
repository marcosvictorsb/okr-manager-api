import { ModelStatic } from "sequelize";
import { CompanyEntity } from "../entities/company.entity";
import { CompanyModel } from '../model/company.model'
import { CreateCompanyInteractor } from "../usecase/create.company.interactor";
import { InsertCompany } from "./create.company.interface";
import logger from "../../../config/logger";

export type CompanyGatewayDependencies = {
  companyRepository: ICompanyRepository
  logger: typeof logger
}

export type CompanyRepositoryDependencies = {
  model: ModelStatic<CompanyModel>; 
}

