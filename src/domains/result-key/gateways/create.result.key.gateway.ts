import { IResultKeyRepository, ICreateResultKeyGateway, CrateResultKeyGatewayParams, InsertResultKey, FindResulKeyCriteria } from '../interfaces';
import { ResultKeyEntity } from '../entities/result.key.entity';
import { MixCreateResultKeyService } from '../../../adapters/gateways/create.result.key.gateway';

export class CreateResultKeyGateway extends MixCreateResultKeyService implements ICreateResultKeyGateway {
  resultkeyRepository: IResultKeyRepository;

  constructor(params: CrateResultKeyGatewayParams) {
    super(params);
    this.resultkeyRepository = params.repository;
  }

  async createResultKey(data: InsertResultKey): Promise<ResultKeyEntity> {
    return await this.resultkeyRepository.create(data);
  }

  async findResultKey(criteria: FindResulKeyCriteria): Promise<ResultKeyEntity | null> {
    return await this.resultkeyRepository.find(criteria)
  }
}
