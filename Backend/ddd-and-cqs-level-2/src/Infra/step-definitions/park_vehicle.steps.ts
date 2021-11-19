import { binding, given, then, when } from 'cucumber-tsflow';
import { expect } from 'chai';

import { Vehicle, Location } from '@model/vehicle.model';


@binding()
export class ParkVehicleSteps {

    private location!: Location;
    private vehicle: Vehicle = new Vehicle('AA-229-AA');

    @given('a location')
    givenALocation() {
        this.location = { longitude: -92.634, latitude: 30.123, altitude: 707 };
    }

    @given('my vehicle has been parked into this location')
    @when('I park my vehicle at this location')
    @when('I try to park my vehicle at this location')
    whenParkingVehicle() {
        this.vehicle.updateLocation(this.location);
    }

    @then('the known location of my vehicle should verify this location')
    @then('I should be informed that my vehicle is already parked at this location')
    thenLocationVerifiedAndNotified() {
        expect(this.vehicle.getLocation()).deep.equals(this.location);
    }

}