import { DataTypes, Model } from 'sequelize';
import database from '../../../infra/database/connection/mysql'
import { ObjectiveModel } from '../../objective/model/objective.model';
import { CompanyModel } from '../../company/model/company.model';
import { UserModel } from '../../user/model/user.model';

class ResultKeyModel extends Model {
  id!: number
  identifier!: string
  name!: number
  initial_value!: number
  target_value!: number
  current_value!: number
  id_objective!: number
  id_user!: number
  id_company!: number
  created_at!: number
  updated_at!: number
  deleted_at!: number
}

ResultKeyModel.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    identifier: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    initial_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    target_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_objective: {
      type: DataTypes.UUID,
      references: {
        model: 'objectives',
        key: 'id',
      },
    },
    id_user: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    id_company: {
      type: DataTypes.UUID,
      references: {
        model: 'company',
        key: 'id',
      },
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: database,
    tableName: 'result_keys',
    timestamps: true,
    underscored: true,
    paranoid: true,
  },
);

ResultKeyModel.belongsTo(CompanyModel, { foreignKey: 'id_company', as: 'companies' });
ResultKeyModel.belongsTo(ObjectiveModel, { foreignKey: 'id_objective', as: 'objectives' });
ResultKeyModel.belongsTo(UserModel, { foreignKey: 'id_user', as: 'users' });

export { ResultKeyModel };
