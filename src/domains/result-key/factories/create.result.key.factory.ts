import logger from '../../../config/logger';
import { Presenter } from '../../../protocols/presenter';
import { ResultKeyModel } from '../model/result.key.model';
import { ResultKeyRepository } from '../repositories/result.key.repository';
import { CreateResultKeyGateway } from '../gateways/create.result.key.gateway';
import { CreateResultKeyInteractor } from '../usecases/create.result.key.interactor';
import { CreateResultKeyController } from '../controllers/create.result.key.controller';


const repository = new ResultKeyRepository({ model: ResultKeyModel  });
const gateway = new CreateResultKeyGateway({ repository, logger });
const presenter = new Presenter();
const interactor = new CreateResultKeyInteractor(gateway, presenter);
export const createResultKeyController = new CreateResultKeyController({ interactor });

