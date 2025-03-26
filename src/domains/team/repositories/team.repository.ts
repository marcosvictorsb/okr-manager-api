import { TeamModel } from '../model/team.model';
import { TeamEntity } from '../entities/team.entity';
import { ModelStatic } from 'sequelize';
import { InsertCriteria, FindCriteria, ITeamRepository, TeamRepositoryDependencies,  } from '../interfaces/';

export class TeamRepository implements ITeamRepository  {
  protected model: ModelStatic<TeamModel> ;

  constructor(params: TeamRepositoryDependencies) {
    this.model = params.model;
  }  

  private getConditions(criteria: FindCriteria): Record<string, unknown> {    
    const whereConditions: Record<string, unknown> = {};

    if (criteria.name) {
      whereConditions['name'] = criteria.name;
    }

    if (criteria.id_company) {
      whereConditions['id_company'] = criteria.id_company;
    }
  
    return whereConditions;
  }

  public async create(data: InsertCriteria): Promise<TeamEntity> {
    const team = await this.model.create(data);
    return new TeamEntity(team);
  }

  public async find(criteria: FindCriteria): Promise<TeamEntity | null> {
    const team = await this.model.findOne({
      where: this.getConditions(criteria),
      raw: true,
    });

    if (!team) return null;

    return new TeamEntity(team);
  }

  // public async findAll(): Promise<UserEntity[]> {
  //   const users = await this.model.findAll();
  //   return users.map(
  //     (user: any) =>
  //       new UserEntity(user),
  //   );
  // }

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


