import { binding, given, then, when } from 'cucumber-tsflow';
import { expect } from 'chai';

import { Vehicle } from '@model/vehicle.model';
import { Location } from '@model/location.model';


@binding()
export class ParkVehicleSteps {

    private location!: Location;
    private vehicle: Vehicle = new Vehicle();

    @given('a location')
    givenALocation() {
        this.location = new Location();
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
        expect(this.vehicle.location).equals(this.location);
    }

}