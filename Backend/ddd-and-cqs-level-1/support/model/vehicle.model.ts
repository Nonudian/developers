import { Location } from './location.model';


export class Vehicle {

    vehiclePlateNumber!: string;
    location!: Location;

    updateLocation(location: Location): void {
        if (!this.isAlreadyParkedAt(location)) {
            this.location = location;
            return;
        }

        console.log('This vehicule is already parked at this location.');
    }

    isAlreadyParkedAt(location: Location): boolean {
        return this.location === location;
    }

}
