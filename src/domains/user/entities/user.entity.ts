export class UserEntity {
  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly id_company?: number;
  public readonly created_at?: Date;
  public readonly updated_at?: Date;

  constructor(params: {
    id: number;
    name: string;
    email: string;
    password: string;
    id_company?: number;
    created_at?: Date;
    updated_at?: Date;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
    this.id_company = params.id_company;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }

  public isPasswordValid(password: string, encryption: { compare: (plain: string, hashed: string) => boolean }): boolean {
    return encryption.compare(password, this.password);
  }
}