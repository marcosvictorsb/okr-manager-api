export class TeamEntity {
  public readonly id: number
  public readonly uuid: string
  public readonly name: string
  public readonly id_company?: number
  public readonly created_at?: Date
  public readonly updated_at?: Date
  public readonly deleted_at?: Date

  constructor(params: { 
    id: number;
    uuid: string;
    name: string;  
    id_company?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
   }) {
    this.id = params.id;
    this.uuid = params.uuid;
    this.name = params.name;    
    this.id_company = params.id_company;
    this.created_at = params.created_at ? new Date(params.created_at) : undefined;
    this.updated_at = params.updated_at ? new Date(params.updated_at) : undefined;
    this.deleted_at = params.deleted_at ? new Date(params.deleted_at) : undefined;
  }
}