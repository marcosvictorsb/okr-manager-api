import { DataTypes, Model } from 'sequelize'
import database from '../../../infra/database/connection/mysql'
import { UserModel } from '../../user/model/user.model'
import { TeamModel } from '../../team/model/team.model'
import { CompanyModel } from '../../company/model/company.model'


class TeamUserModel extends Model {
  id!: number
  id_team!: number
  id_user!: number
  id_company!: number
  created_at!: Date
  updated_at!: Date
  deleted_at!: Date
}


TeamUserModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_team: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
      },
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
    },
    id_company: {
      type: DataTypes.INTEGER,
      references: {
        model: 'companies',
        key: 'id',
      },
      allowNull: false,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW()
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW()
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: database,
    tableName: 'team_users',
    timestamps: true,
    underscored: true,
    paranoid: true,
    indexes: [
      { fields: ['teamId'] },
      { fields: ['userId'] },
      { fields: ['companyId'] },
    ],
  },
);

TeamUserModel.belongsTo(TeamModel, { foreignKey: 'id_team', as: 'teams' });
TeamModel.hasMany(TeamUserModel, { foreignKey: 'id_team', as: 'team_users' });

TeamUserModel.belongsTo(UserModel, { foreignKey: 'id_user', as: 'users' });
UserModel.hasMany(TeamUserModel, { foreignKey: 'id_user', as: 'team_users' });

TeamUserModel.belongsTo(CompanyModel, { foreignKey: 'id_company', as: 'companies' });
CompanyModel.hasMany(TeamUserModel, { foreignKey: 'id_company', as: 'company_team_user' });

export { TeamUserModel }
