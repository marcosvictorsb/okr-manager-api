import { TeamUserModel } from '../model/team.user.model';
import { TeamUserEntity } from '../entities/team.user.entity';
import { ModelStatic } from 'sequelize';
import { DeleteCriteria, FindCriteria, InsertCriteria, ITeamUserRepository, TeamUserRepositoryDependencies, UpdateCriteria } from '../interfaces/';

export class TeamUserRepository implements ITeamUserRepository  {
  protected model: ModelStatic<TeamUserModel> ;

  constructor(params: TeamUserRepositoryDependencies) {
    this.model = params.model;
  }  

  private getConditions(criteria: FindCriteria): Record<string, any> {    
    const whereConditions: Record<string, any> = {};

    if (criteria.id) {
      whereConditions['id'] = criteria.id;
    }

    if(criteria.id_company) {
      whereConditions['id_company'] = criteria.id_company;
    }

    if(criteria.id_team) {
      whereConditions['id_team'] = criteria.id_team;
    }

    if(criteria.id_user) {
      whereConditions['id_user'] = criteria.id_user;
    }

    return whereConditions;
  }

  public async create(data: InsertCriteria): Promise<TeamUserEntity> {
    const addUsertoTeam = await this.model.create(data);
    return new TeamUserEntity(addUsertoTeam);
  }

  public async find(criteria: FindCriteria): Promise<TeamUserEntity | null> {
    const userTeam = await this.model.findOne({
      where: this.getConditions(criteria),
      raw: true,
    });

    if (!userTeam) return null;

    return new TeamUserEntity(userTeam);
  }

  public async findAll(criteria: FindCriteria): Promise<TeamUserEntity[] | null> {
    const teamUsers = await this.model.findAll({
      where: this.getConditions(criteria),
      raw: true,
    });

    return teamUsers.map(
      (teamUser: any) =>
        new TeamUserEntity(teamUser),
    );
  }

  public async update(criteria: UpdateCriteria, data: Partial<TeamUserEntity>): Promise<TeamUserEntity | null> {
    const [affectedRows] = await this.model.update(data, { where: { id: criteria.id } });
    if (affectedRows === 0) return null;

    const updatedUser = await this.model.findByPk(criteria.id);
    if (!updatedUser) return null;

    return new TeamUserEntity(updatedUser);
  }

  public async delete(criteria: DeleteCriteria): Promise<boolean> {
    const affectedRows = await this.model.destroy({ where: { id: criteria.id } });
    return affectedRows > 0;
  }
}


