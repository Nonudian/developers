import { binding, given, then, when } from 'cucumber-tsflow';
import { expect } from 'chai';

import { Fleet } from '@model/fleet.model';
import { Vehicle } from '@model/vehicle.model';


@binding()
export class RegisterVehicleSteps {

    private fleet!: Fleet;
    private vehicle!: Vehicle;

    @given('my fleet', '@critical')
    givenMyFleet() {
        this.fleet = new Fleet();
    }

    @given('a vehicle', '@critical')
    givenAVehicle() {
        this.vehicle = new Vehicle();
    }

    @when('I register this vehicle into my fleet', '@critical')
    whenIRegisterThisVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    @then('this vehicle should be part of my vehicle fleet', '@critical')
    thenThisVehicleShouldBePartOfMyVehicleFleet() {
        expect(this.fleet.vehicles).to.contains(this.vehicle);
    }

}