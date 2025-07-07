import { ParkService } from "./park.service";
export declare class ParkController {
    private readonly parkService;
    constructor(parkService: ParkService);
    pets(): Promise<import("../models/park.model").Park[]>;
    create_pet(data: any): Promise<import("../models/park.model").Park>;
}
