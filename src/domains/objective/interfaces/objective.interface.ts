import { ModelStatic } from "sequelize";
import { ObjectiveEntity } from "../entities/objective.entity";
import { ObjectiveModel } from "../model/objective.model";

export type InsertCriteria = {
  name: string
  quarter: string
  year: string
  id_company: number
  id_team: number
}

export type FindObjectiveCriteria = {
  name?: string
  quarter?: string
  year?: string
  id_company?: number
  id_team?: number
}

export type ObjectiveRepositoryDependencies = {
  model: ModelStatic<ObjectiveModel>
}

export interface IObjectiveRepository {
  create(objetive: InsertCriteria): Promise<ObjectiveEntity>;
  // find(criteria: FindCompanyCriteria): Promise<CompanyEntity | null>;
  findAll(criteria: FindObjectiveCriteria): Promise<ObjectiveEntity[] | null>
}