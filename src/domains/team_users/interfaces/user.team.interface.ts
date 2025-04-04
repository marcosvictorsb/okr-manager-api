import { ModelStatic } from 'sequelize'
import { TeamUserEntity } from '../entities/team.user.entity'
import { TeamUserModel } from '../model/team.user.model'

export type FindCriteria = {
  id?: number
  id_team?: number
  id_user?: number
  id_company?: number
}

export type UpdateCriteria = {
  id?: number
  id_team?: number
  id_user?: number
  id_company?: number
}

export type DeleteCriteria = {
  id: number
  id_team: number
  id_user: number
  id_company: number
}

export type InsertCriteria = {
  id_team: number
  id_user: number
  id_company: number
}

export type TeamUserRepositoryDependencies = {
  model: ModelStatic<TeamUserModel>
}


export interface ITeamUserRepository {
  create(insert: InsertCriteria): Promise<TeamUserEntity>;
  find(criteria: FindCriteria): Promise<TeamUserEntity | null>;
  findAll(criteria: FindCriteria): Promise<TeamUserEntity[] | null>;
  update(criteria: UpdateCriteria, data: Partial<TeamUserEntity>): Promise<TeamUserEntity | null>;
  delete(criteria: DeleteCriteria): Promise<boolean>;
}