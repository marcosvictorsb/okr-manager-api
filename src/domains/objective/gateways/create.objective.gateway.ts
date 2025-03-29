import { IObjectiveRepository, ICreateObjectiveGateway, CreateObjectiveGatewayParams, InsertCriteria } from '../interfaces';
import { ObjectiveEntity } from '../entities/objective.entity';
import { MixCreateObjectiveService } from '../../../adapters/gateways/create.objective.gateway';

export class CreateObjectiveGateway extends MixCreateObjectiveService implements ICreateObjectiveGateway {
  objectiveRepository: IObjectiveRepository;

  constructor(params: CreateObjectiveGatewayParams) {
    super(params);
    this.objectiveRepository = params.repository;
  }

  async createObjective(data: InsertCriteria): Promise<ObjectiveEntity> {
    return this.objectiveRepository.create(data);
  }
}
