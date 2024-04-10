import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cantidad: number

  @column()
  public usuarios: String

  @column()
  public mensajes: String

  @column()
  public historial: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
