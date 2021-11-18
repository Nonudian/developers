import { Vehicle } from './vehicle.model';


export class Fleet {

    private static increment = 0;

    fleetId: number = Fleet.increment++;
    vehicles: Array<Vehicle> = [];

    registerVehicle(vehicle: Vehicle): void {
        if (!this.contains(vehicle)) {
            this.vehicles = [...this.vehicles, vehicle];
            return;
        }

        console.log('This vehicule is already registered in your fleet.');
    }

    contains(vehicle: Vehicle): boolean {
        return this.vehicles.includes(vehicle);
    }

}
