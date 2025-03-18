import { LoggerMixin } from "../../../services/logger.service";
import { CompanyEntity } from "../entities/company.entity";
import { CompanyGatewayDependencies, ICreateCompanyGateway, ICompanyRepository, InsertCompany, FindCompanyCriteria } from "../interfaces";

class BaseGateway { constructor(...args: any[]) {} }
const MixedGateway = LoggerMixin(BaseGateway);


export class CreateCompanyGateway  extends MixedGateway implements ICreateCompanyGateway {
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