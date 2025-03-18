export class CompanyEntity {
  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly cnpj: string;
  public readonly domain: string;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor(params: {
    id: number;
    name: string;
    email: string;
    cnpj: string;
    domain: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this.id = params.id
    this.name = params.name
    this.email = params.email
    this.cnpj = params.cnpj
    this.domain = params.domain
    this.created_at = params.created_at
    this.updated_at = params.updated_at
    this.deleted_at = params.deleted_at
  }
}