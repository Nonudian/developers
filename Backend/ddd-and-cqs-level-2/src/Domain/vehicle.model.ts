import { Location } from './location.model';


export class Vehicle {

    location: Location = new Location();

    constructor(
        public vehiclePlateNumber: string = 'XX-YYY-ZZ',
    ) { }

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
