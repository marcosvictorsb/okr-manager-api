export class ResultKeyEntity {
  public readonly id: number
  public readonly identifier: string
  public readonly name: number
  public readonly initial_value: number
  public readonly target_value: number
  public readonly current_value: number
  public readonly id_objective: number
  public readonly id_user: number
  public readonly id_company: number
  public readonly created_at: number
  public readonly updated_at: number
  public readonly deleted_at: number

  constructor(params: {
    id: number
    identifier: string
    name: number
    initial_value: number
    target_value: number
    current_value: number
    id_objective: number
    id_user: number
    id_company: number
    created_at: number
    updated_at: number
    deleted_at: number
  }) {
    this.id = params.id
    this.identifier = params.identifier
    this.name = params.name
    this.initial_value = params.initial_value
    this.target_value = params.target_value
    this.current_value = params.current_value
    this.id_objective = params.id_objective
    this.id_user = params.id_user
    this.id_company = params.id_company
    this.created_at = params.created_at
    this.updated_at = params.updated_at
    this.deleted_at = params.deleted_at
  }
}