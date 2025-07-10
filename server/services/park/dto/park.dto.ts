import { IsString, IsNumber } from "class-validator";

export class ParkDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsNumber()
  health: number;

  @IsNumber()
  hungry: number;

  @IsNumber()
  mood: number;

  @IsNumber()
  status: string;
}
