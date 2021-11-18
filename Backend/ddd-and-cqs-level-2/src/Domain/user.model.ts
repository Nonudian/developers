import { Fleet } from './fleet.model';
import { Vehicle } from './vehicle.model';


export class User {

    private static increment = 0;

    userId: number = User.increment++;
    fleets: Array<Fleet> = [];
    vehicles: Array<Vehicle> = [];

}
