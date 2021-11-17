import { Vehicle } from './vehicle.model';


export class Fleet {

    userId!: number;
    fleetId!: number;
    vehicles: Array<Vehicle> = [];

    registerVehicle(vehicle: Vehicle): void {
        this.vehicles = [...this.vehicles, vehicle];
    }

}
