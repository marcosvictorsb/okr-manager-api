import { CreateCompanyMixin } from "../../../adapters/gateways";
import { CompanyEntity } from "../entities/company.entity";
import { CompanyGatewayDependencies, ICreateCompanyGateway, ICompanyRepository, InsertCompany, FindCompanyCriteria } from "../interfaces";


export class CreateCompanyGateway extends CreateCompanyMixin implements ICreateCompanyGateway {
  companyRepository: ICompanyRepository;  
  
  constructor(params: CompanyGatewayDependencies) {
    super(params)
    this.companyRepository  = params.companyRepository
  }  
 
  public async createCompany(company: InsertCompany): Promise<CompanyEntity> {
    return await this.companyRepository.create(company);   
  }

  public async findCompany(criteria: FindCompanyCriteria): Promise<CompanyEntity | null> {
    return await this.companyRepository.find(criteria);
  }
  
}