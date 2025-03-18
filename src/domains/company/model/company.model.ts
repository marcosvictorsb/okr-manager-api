import { DataTypes, Model } from 'sequelize';
import mysql from '../../../infra/database/connection/mysql';


class CompanyModel extends Model {
  id!: number;
  name!: string;
  email!: string;
  cnpj!: string;
  domain!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;
}


CompanyModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'companies',
    timestamps: true,
    paranoid: true,
    underscored: true
  }
);

export {CompanyModel}