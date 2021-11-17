import { Vehicle } from './vehicle.model';


export class Fleet {

    userId!: number;
    fleetId!: number;
    vehicles: Array<Vehicle> = [];

    registerVehicle(vehicle: Vehicle): void {
        if (!this.contains(vehicle)) {
            this.vehicles = [...this.vehicles, vehicle];
            return;
        }

        console.log('This vehicule is already registered !');
    }

    contains(vehicle: Vehicle): boolean {
        return this.vehicles.includes(vehicle);
    }

}
