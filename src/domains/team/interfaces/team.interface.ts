import { TeamEntity } from "../entities/team.entity";
import { TeamModel } from "../model/team.model";
import { InsertCriteria } from "./create.team.interface";

export type TeamRepositoryDependencies = {
  model: typeof TeamModel;
}


export type FindCriteria = {
  name?: string;
  id_company?: number;
}

export interface ITeamRepository {
  create(team: InsertCriteria): Promise<TeamEntity>;
  find(criteria: FindCriteria): Promise<TeamEntity | null>;
//   findAll(): Promise<User[]>;
//   update(criteria: UpdateCriteria, data: Partial<User>): Promise<User | null>;
//   delete(criteria: DeleteCriteria): Promise<boolean>;
}
