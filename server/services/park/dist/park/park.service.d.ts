import { ParkDto } from "./dto/park.dto";
import { Park } from "../models/park.model";
export declare class ParkService {
    private readonly parkModel;
    constructor(parkModel: typeof Park);
    findAll(): Promise<Park[]>;
    create(thedata: ParkDto): Promise<Park>;
}
