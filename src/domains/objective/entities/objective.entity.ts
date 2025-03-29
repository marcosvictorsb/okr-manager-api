export class ObjectiveEntity {
  public readonly id: number
  public readonly uuid: string
  public readonly name: string
  public readonly quarter: string
  public readonly year: string
  public readonly id_company: number
  public readonly id_team: number
  public readonly created_at: Date
  public readonly updated_at: Date
  public readonly deleted_at: Date

  constructor(params: {
    id: number
    uuid: string
    name: string
    quarter: string
    year: string
    id_company: number
    id_team: number
    created_at: Date
    updated_at: Date
    deleted_at: Date
  }) {
    this.id = params.id
    this.uuid = params.uuid
    this.name = params.name
    this.quarter = params.quarter
    this.year = params.year
    this.id_company = params.id_company
    this.id_team = params.id_team
    this.created_at = params.created_at
    this.updated_at = params.updated_at
    this.deleted_at = params.deleted_at
  }
}

