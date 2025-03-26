import { DataTypes, Model } from 'sequelize';
import mysql from '../../../infra/database/connection/mysql';
import { CompanyModel } from '../../company/model/company.model'



class TeamModel extends Model {
  id!: number
  uuid!: string
  name!: string
  id_company!: number
  created_at!: Date
  updated_at!: Date
  deleted_at!: Date
}


TeamModel.init(
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
    id_company: {
      type: DataTypes.INTEGER,
      references: {
        model: 'company',
        key: 'id',
      },
    },
    created_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: mysql,
    tableName: 'teams',
    timestamps: true,
    underscored: true,
    paranoid: true,
  },
);

TeamModel.belongsTo(CompanyModel, {
  foreignKey: 'id_company',
  as: 'companies',
});

export {  TeamModel };
