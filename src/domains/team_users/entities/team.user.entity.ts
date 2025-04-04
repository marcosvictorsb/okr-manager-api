export class TeamUserEntity {
  public readonly id: number;
  public readonly id_team: number;
  public readonly id_user: number;
  public readonly id_company: number;
  public readonly created_at: Date;
  public readonly updated_at: Date;
  public readonly deleted_at: Date;

  constructor(params: {
    id: number;
    id_team: number;
    id_user: number;
    id_company: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }) {
    this.id = params.id;
    this.id_team = params.id_team;
    this.id_user = params.id_user;
    this.id_company = params.id_company;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
    this.deleted_at = params.deleted_at;
  }
}