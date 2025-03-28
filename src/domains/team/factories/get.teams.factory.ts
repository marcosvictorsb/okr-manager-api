import logger from '../../../config/logger';
import { TeamRepository } from '../repositories/team.repository';
import { TeamModel } from '../model/team.model';
import { CreateTeamGatewayParams } from '../interfaces/';
import { Presenter } from '../../../protocols/presenter';
import { GetTeamsGateway } from '../gateways/get.teams.gateway';
import { GetTeamsInteractor } from '../usecases/get.teams.interactor';
import { GetTeamsController } from '../controllers/get.teams.controller';


const repository = new TeamRepository({ model: TeamModel });

const gateway: CreateTeamGatewayParams = {
  repository,
  logger
}

const presenter = new Presenter();
const teamsGateway = new GetTeamsGateway(gateway);
const interactor = new GetTeamsInteractor(teamsGateway, presenter);
export const getTeamsController = new GetTeamsController({ interactor });
