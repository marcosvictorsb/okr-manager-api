import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import mysql from '../../../infra/database/connection/mysql';
import { CompanyModel } from '../../company/model/company.model'

class UserModel extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;
}

UserModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    id_company: {
      type: DataTypes.INTEGER,
      references: {
        model: 'companies',
        key: 'id',
      },
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: mysql,
    tableName: 'users',
    timestamps: true,
    underscored: true,
    paranoid: true,
  }
);

UserModel.belongsTo(CompanyModel, {
  foreignKey: 'id_company',
  as: 'companies',
});

export { UserModel };
