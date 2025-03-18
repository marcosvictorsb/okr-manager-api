import { CompanyEntity } from "../entities/company.entity";
import { CompanyModel } from '../model/company.model';
import { CompanyRepositoryDependencies, FindCompanyCriteria, ICompanyRepository, InsertCompany } from "../interfaces/";
import { ModelStatic } from "sequelize";

export class CompanyRepository implements ICompanyRepository {
  protected model: ModelStatic<CompanyModel> ;

  constructor(params: CompanyRepositoryDependencies) {
    this.model = params.model;
  }  

  private getConditions(criteria: FindCompanyCriteria): Record<string, any> {    
    const whereConditions: Record<string, any> = {};

    if (criteria.email) {
      whereConditions['email'] = criteria.email;
    }

    if (criteria.domain) {
      whereConditions['domain'] = criteria.domain;
    }
  
    return whereConditions;
  }

  public async create(company: InsertCompany): Promise<CompanyEntity> {
    const createdCompany = await this.model.create(company);
    return new CompanyEntity(createdCompany);
  }

  public async find(criteria: FindCompanyCriteria): Promise<CompanyEntity | null> {
    const company = await this.model.findOne({
      where: this.getConditions(criteria),
      raw: true,
    });

    if (!company) return null;

    return new CompanyEntity(company);
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