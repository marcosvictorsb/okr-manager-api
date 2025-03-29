import { DataTypes, Model } from 'sequelize';
import mysql from '../../../infra/database/connection/mysql';
import { CompanyModel } from '../../company/model/company.model';
import { TeamModel } from '../../team/model/team.model';

class ObjectiveModel extends Model {
  id!: number;
  uuid!: string;
  name!: string;
  quarter!: string;
  year!: string;
  id_company!: number;
  id_team!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;
}


ObjectiveModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    quarter: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_company: {
      type: DataTypes.UUID,
      references: {
        model: 'company',
        key: 'id',
      },
    },
    id_team: {
      type: DataTypes.UUID,
      references: {
        model: 'team',
        key: 'id',
      },
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Date.now()
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Date.now()
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: mysql,
    tableName: 'objectives',
    timestamps: true,
    underscored: true,
    paranoid: true,
  },
);

ObjectiveModel.belongsTo(CompanyModel, { foreignKey: 'id_company', as: 'company' });
ObjectiveModel.belongsTo(TeamModel, { foreignKey: 'id_team', as: 'teams' });

export { ObjectiveModel };
