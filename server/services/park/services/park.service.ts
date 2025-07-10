import { Injectable } from "@nestjs/common";
import { ParkDto } from "../dto/park.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Park } from "../models/park.model";

@Injectable()
export class ParkService {
  constructor(
    @InjectModel(Park)
    private readonly parkModel: typeof Park,
  ) {}

  findAll() {
    return this.parkModel.findAll();
  }

  async create(thedata: ParkDto) {
    const result = await this.parkModel.create({
      name: thedata.name,
      age: thedata.age,
      health: thedata.health,
      hungry: thedata.hungry,
      mood: thedata.mood,
      status: thedata.status,
    });
    return result;
  }

  async deleteall(){
    await this.parkModel.truncate()
  }
}
