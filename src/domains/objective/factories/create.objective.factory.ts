import { Presenter } from '../../../protocols/presenter'
import logger from '../../../config/logger'
import { CreateObjectiveGateway } from '../gateways/create.objective.gateway'
import { CreateObjectiveGatewayParams } from '../interfaces'
import { ObjectiveModel } from '../model/objective.model'
import { ObjectiveRepository } from '../repositories/objective.repository'
import { CreateObjectiveInteractor } from '../usecases/create.objective.interactor'
import { CreateObjectiveController } from '../controllers/create.objective.controller'

const repository = new ObjectiveRepository({ model: ObjectiveModel })

const paramGateway: CreateObjectiveGatewayParams = {
  repository,
  logger
}

const gateway = new CreateObjectiveGateway(paramGateway);
const presenter = new Presenter();
const interactor = new CreateObjectiveInteractor(gateway, presenter);
export const createObjectiveController = new CreateObjectiveController({ interactor });   
