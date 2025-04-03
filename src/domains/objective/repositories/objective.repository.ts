import { ObjectiveEntity } from "../entities/objective.entity";
import { ObjectiveModel } from '../model/objective.model';
import { FindObjectiveCriteria, InsertCriteria, IObjectiveRepository, ObjectiveRepositoryDependencies } from "../interfaces/";
import { ModelStatic } from "sequelize";

export class ObjectiveRepository implements IObjectiveRepository {
  protected model: ModelStatic<ObjectiveModel> ;

  constructor(params: ObjectiveRepositoryDependencies) {
    this.model = params.model;
  }  

  private getConditions(criteria: FindObjectiveCriteria): Record<string, any> {    
    const whereConditions: Record<string, any> = {};

    if (criteria.name) {
      whereConditions['name'] = criteria.name;
    }
    if (criteria.quarter) { 
      whereConditions['quarter'] = criteria.quarter;
    }
    if (criteria.year) {
      whereConditions['year'] = criteria.year;
    }
    if (criteria.id_company) {  
      whereConditions['id_company'] = criteria.id_company;
    }
    if (criteria.id_team) {
      whereConditions['id_team'] = criteria.id_team;
    }    
  
    return whereConditions;
  }

  public async create(data: InsertCriteria): Promise<ObjectiveEntity> {
    const createdObjective = await this.model.create(data);
    return new ObjectiveEntity(createdObjective);
  }

  public async find(criteria: FindObjectiveCriteria): Promise<ObjectiveEntity | null> {
    const objective = await this.model.findOne({
      where: this.getConditions(criteria),
      raw: true,
    });

    if (!objective) return null;

    return new ObjectiveEntity(objective);
  }

  public async findAll(criteria: FindObjectiveCriteria): Promise<ObjectiveEntity[] | null> {
    const users = await this.model.findAll({
      where: this.getConditions(criteria)
    });
    return users.map(
      (user: ObjectiveEntity) =>
        new ObjectiveEntity(user),
    );
  }

  // public async update(criteria: UpdateCriteria, data: Partial<UserEntity>): Promise<UserEntity | null> {
  //   const [affectedRows] = await this.model.update(data, { where: { id: criteria.id } });
  //   if (affectedRows === 0) return null;

  //   const updatedUser = await this.model.findByPk(criteria.id);
  //   if (!updatedUser) return null;

  //   return new UserEntity(updatedUser);
  // }

  // public async delete(criteria: DeleteCriteria): Promise<boolean> {
  //   const affectedRows = await this.model.destroy({ where: { id: criteria.id } });
  //   return affectedRows > 0;
  // }

}