import { ICreateResultKeyGateway, CreateResultKeyInput, FindResulKeyCriteria, InsertResultKey } from '../interfaces';
import { IPresenter } from '../../../protocols/presenter';
import { HttpResponse } from '../../../protocols/http';

export class CreateResultKeyInteractor {
  constructor(private readonly gateway: ICreateResultKeyGateway, private presenter: IPresenter) {}

  async execute(input: CreateResultKeyInput): Promise<HttpResponse> {
    this.gateway.loggerInfo('Iniciando o processo de criação de resultado chave', { data: JSON.stringify(input) });
    try {
      const { name, id_company, id_objective, current_value, initial_value, target_value, id_user } = input
      const criteria: FindResulKeyCriteria = {
        name, id_company, id_objective
      }
      const existResultKey = await this.gateway.findResultKey(criteria);
      if(existResultKey) {
        this.gateway.loggerInfo('Resultado chave encontrado', { input: JSON.stringify(criteria) })
        return this.presenter.conflict('resultado chave já existe')
      }

      const insert: InsertResultKey = {
        name, current_value, initial_value, target_value, id_company, id_objective, id_user
      }
      const resultKey = await this.gateway.createResultKey(insert);
      this.gateway.loggerInfo('Resultado chave criado com sucesso', { resultKey: JSON.stringify(resultKey) })
      return this.presenter.created(resultKey);
    } catch (error) {
      this.gateway.loggerErro('Erro ao criar resultado chave', error);
      return this.presenter.serverError('Erro ao criar resultado chave');
    }
  }
}
