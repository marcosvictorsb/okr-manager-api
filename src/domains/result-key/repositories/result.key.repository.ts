import { ResultKeyEntity } from "../entities/result.key.entity";
import { ResultKeyModel } from '../model/result.key.model';
import { ResultkeyRepositoryDependencies, FindResulKeyCriteria, InsertResultKey } from "../interfaces/";
import { ModelStatic } from "sequelize";
import { IResultKeyRepository } from "../interfaces";

export class ResultKeyRepository implements IResultKeyRepository {
  protected model: ModelStatic<ResultKeyModel> ;

  constructor(params: ResultkeyRepositoryDependencies) {
    this.model = params.model;
  }  

  private getConditions(criteria: FindResulKeyCriteria): Record<string, any> {    
    const whereConditions: Record<string, any> = {};

    if(criteria.id) {
      whereConditions['id'] = criteria.id
    }

    if(criteria.identifier) {
      whereConditions['identifier'] = criteria.identifier
    }

    if(criteria.name) {
      whereConditions['name'] = criteria.name
    }

    if(criteria.initial_value) {
      whereConditions['initial_value'] = criteria.initial_value
    }

    if(criteria.target_value) {
      whereConditions['target_value'] = criteria.target_value
    }

    if(criteria.current_value) {
      whereConditions['current_value'] = criteria.current_value
    }

    if(criteria.id_objective) {
      whereConditions['id_objective'] = criteria.id_objective
    }

    if(criteria.id_user) {
      whereConditions['id_user'] = criteria.id_user
    } 

    if(criteria.id_company) {
      whereConditions['id_company'] = criteria.id_company
    }
  
    return whereConditions;
  }

  public async create(data: InsertResultKey): Promise<ResultKeyEntity> {
    const createdResultKey = await this.model.create(data);
    return new ResultKeyEntity(createdResultKey);
  }

  public async find(criteria: FindResulKeyCriteria): Promise<ResultKeyEntity | null> {
    const resultKey = await this.model.findOne({
      where: this.getConditions(criteria),
      raw: true,
    });

    if (!resultKey) return null;

    return new ResultKeyEntity(resultKey);
  }

  public async findAll(criteria: FindResulKeyCriteria): Promise<ResultKeyEntity[] | null> {
    const resultKeys = await this.model.findAll({
      where: this.getConditions(criteria)
    });
    return resultKeys.map(
      (resultKey: ResultKeyEntity) =>
        new ResultKeyEntity(resultKey),
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