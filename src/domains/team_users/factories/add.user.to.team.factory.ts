import { Presenter } from "../../../protocols/presenter";
import logger from "../../../config/logger";
import { AddUserToTeamGateway } from "../gateways/add.user.to.team.gateway";
import { TeamUserModel } from "../model/team.user.model";
import { TeamUserRepository } from "../repositories/team.user.repository"
import { AddUserToTeamInteractor } from "../usecases/add.user.to.team.interactor";
import { AddUserToTeamGatewayParams } from "../interfaces";
import { AddUserToTeamController } from "../controllers/add.user.to.team.controller";


const repository = new TeamUserRepository({ model: TeamUserModel });

const params: AddUserToTeamGatewayParams = {
  repository,
  logger
}

const presenter = new Presenter()
const gateway = new AddUserToTeamGateway(params);
const interactor = new AddUserToTeamInteractor(gateway, presenter)
export const addUserToTeamController = new AddUserToTeamController({ interactor })
