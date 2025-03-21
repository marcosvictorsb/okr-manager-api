import { IPresenter } from '../../../protocols/presenter';
import { HttpResponse } from '../../../protocols/http';
import { CreateCompanyInput, FindCompanyCriteria, ICreateCompanyGateway, InsertCompany } from "../interfaces";


export class CreateCompanyInteractor {
  constructor(private readonly gateway: ICreateCompanyGateway, private presenter: IPresenter) {}

  async execute(input: CreateCompanyInput): Promise<HttpResponse> {
    try {
      const { email, domain, cnpj, name } = input;
      this.gateway.loggerInfo('Iniciado o request para registar a empresa', {
        input: JSON.stringify({ name, domain }) 
      })
      
      const criteria: FindCompanyCriteria = { email, domain }      
      const company = await this.gateway.findCompany(criteria);
      if(company) {
        this.gateway.loggerInfo('Empresa já cadastrada', JSON.stringify(criteria))
        return this.presenter.conflict('Empresa já cadastrada');
      }

      const insertCompany: InsertCompany = {
        email, domain, cnpj, name
      }
      const companyCreated = await this.gateway.createCompany(insertCompany)

      this.gateway.loggerInfo('Email enviado');

      return this.presenter.created(companyCreated);
    }catch(error: any){
      this.gateway.loggerErro(error)
      return this.presenter.serverError('Error ao criar company');
    }
  }
}