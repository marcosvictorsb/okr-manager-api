import { ILoggerMixin } from "../../../services";
import { CompanyEntity } from "../entities/company.entity";
import { CreateCompanyInteractor } from "../usecase/create.company.interactor";

export type CreateCompanyInput = { name: string, email: string, cnpj: string, domain: string }

export type InsertCompany = {
  name: string
  email: string
  cnpj: string
  domain: string
}

export type  FindCompanyCriteria = {
  email?: string;
  domain?: string
}

export type CreateCompanyControllerDependencies = {
  interactor: CreateCompanyInteractor
}

export interface ICreateCompanyGateway extends ILoggerMixin {
  createCompany(company: InsertCompany): Promise<CompanyEntity>;
  findCompany(criteria: FindCompanyCriteria): Promise<CompanyEntity | null>
}

export interface ICompanyRepository {
  create(company: InsertCompany): Promise<CompanyEntity>;
  find(criteria: FindCompanyCriteria): Promise<CompanyEntity | null>;
  // findAll(): Promise<User[]>;
  // update(criteria: UpdateCriteria, data: Partial<User>): Promise<User | null>;
  // delete(criteria: DeleteCriteria): Promise<boolean>;
}
