import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Park extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  Id: number;

  @Column
  name: string;

  @Column
  age: number;

  @Column
  health: number;

  @Column
  hungry: number;

  @Column
  mood: number;

  @Column
  status: string;
}
