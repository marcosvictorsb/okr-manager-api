import logger from '../../../config/logger';
import { Presenter } from '../../../protocols/presenter';
import { CreateCompanyController } from '../controllers';
import { CreateCompanyGateway } from "../gateway/create.company.gateway";
import { CompanyGatewayDependencies } from "../interfaces";
import { CompanyModel } from "../model/company.model";
import { CompanyRepository } from "../repository/company.repository";
import { CreateCompanyInteractor } from '../usecase/create.company.interactor';

const companyRepository = new CompanyRepository({ model: CompanyModel });

const gateway: CompanyGatewayDependencies = {
  companyRepository,
  logger
}

const companyGateway = new CreateCompanyGateway(gateway);
const presenter = new Presenter();
const interactor = new CreateCompanyInteractor(companyGateway, presenter);
export const createCompanyController = new CreateCompanyController({ interactor });