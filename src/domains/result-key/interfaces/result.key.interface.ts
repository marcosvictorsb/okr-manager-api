import { ModelStatic } from "sequelize";
import { ResultKeyModel } from "../model/result.key.model";
import { ResultKeyEntity } from '../entities/result.key.entity'

export type ResultkeyRepositoryDependencies = {
  model: ModelStatic<ResultKeyModel>
}

export type InsertResultKey = {
  name?: number
  initial_value?: number
  target_value?: number
  current_value?: number
  id_objective?: number
  id_user?: number
  id_company?: number
}

export type FindResulKeyCriteria = {
  id?: number
  identifier?: string
  name?: number
  initial_value?: number
  target_value?: number
  current_value?: number
  id_objective?: number
  id_user?: number
  id_company?: number
}

export interface IResultKeyRepository {
  create(data: InsertResultKey): Promise<ResultKeyEntity>
  find(criteria: FindResulKeyCriteria): Promise<ResultKeyEntity | null>
}