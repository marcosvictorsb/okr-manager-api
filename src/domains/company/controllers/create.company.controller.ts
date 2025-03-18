import { Request, Response } from 'express';
import { CreateCompanyControllerDependencies, CreateCompanyInput } from "../interfaces";
import { CreateCompanyInteractor } from "../usecase/create.company.interactor"

export class CreateCompanyController {
  private interactor: CreateCompanyInteractor;

  constructor(params: CreateCompanyControllerDependencies) {
    this.interactor = params.interactor
  }

  public async registerCompany(request: Request, response: Response): Promise<Response> {  
    const { name, email, cnpj, domain } = request.body;

    const input: CreateCompanyInput = { name, email, cnpj, domain };
    const result = await this.interactor.execute(input);
    return response.status(result.status).json(result.body);   
  }
}