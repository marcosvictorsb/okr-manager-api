import logger from '../../../config/logger';
import { TeamRepository } from '../repositories/team.repository';
import { CreateTeamGateway } from '../gateways/create.team.gateway';
import { CreateTeamInteractor } from '../usecases/create.team.interactor';
import { TeamModel } from '../model/team.model';
import { CreateTeamGatewayParams } from '../interfaces/';
import { CreateTeamController } from '../controllers/create.team.controller';
import { Presenter } from '../../../protocols/presenter';


const repository = new TeamRepository({ model: TeamModel });

const gateway: CreateTeamGatewayParams = {
  repository,
  logger
}

const teamGateway = new CreateTeamGateway(gateway);
const presenter = new Presenter();
const interactor = new CreateTeamInteractor(teamGateway, presenter);
export const createTeamController = new CreateTeamController({ interactor });
