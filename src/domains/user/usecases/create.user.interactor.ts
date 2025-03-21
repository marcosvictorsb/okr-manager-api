import { ICreateUserGateway } from '../interfaces/';
import { IPresenter } from '../../../protocols/presenter';
import { HttpResponse } from '../../../protocols/http';
import { InputCreateUser, CreateUserData } from '../interfaces/';

export class CreateUserInteractor {
  constructor(private readonly gateway: ICreateUserGateway, private presenter: IPresenter) {}

  async execute(input: InputCreateUser): Promise<HttpResponse> {
    this.gateway.loggerInfo('Creating user', { email: input.email, id_company: input.id_company, name: input.name });

    try {
      const { email, name, id_company, password } = input;
      const existingUser = await this.gateway.findUserByEmail(email);
      if (existingUser) {
        this.gateway.loggerInfo('Usuario já existe para esse email', email);
        return this.presenter.conflict('Usuário já existe');
      }

      const createUserData: CreateUserData = {
        email, name, id_company, password: this.gateway.encryptPassword(password)
      }
      const userCreated = await this.gateway.createUser(createUserData);
      if(!userCreated) {
        this.gateway.loggerInfo('Erro ao criar usuário', email);
        return this.presenter.serverError('Erro ao criar usuário');
      }
      this.gateway.loggerInfo('Usuário criado com sucesso', { email: userCreated.email, id_company: userCreated.id_company, name: userCreated.name });
      
      return this.presenter.created({
        id: userCreated.id,
        email: userCreated.email,
        name: userCreated.name,
      });
    } catch (error) {
      console.log(error);
      this.gateway.loggerInfo('Erro ao criar usuário', error);
      return this.presenter.serverError('Erro ao criar usuário');
    }
    
  }
}