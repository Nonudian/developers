import { before, binding, given, then, when } from 'cucumber-tsflow';
import { expect } from 'chai';

import { Fleet } from '@model/fleet.model';
import { Vehicle } from '@model/vehicle.model';


@binding()
export class RegisterVehicleSteps {

    private fleet!: Fleet;
    protected vehicle!: Vehicle;
    private anotherFleet!: Fleet;

    /** ALL GIVEN */

    @given('my fleet')
    givenMyFleet() {
        this.fleet = new Fleet();
    }

    @given('a vehicle')
    givenAVehicle() {
        this.vehicle = new Vehicle();
    }

    @given('I have registered this vehicle into my fleet')
    givenIHaveRegisteredThisVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    @given('the fleet of another user')
    givenTheFleetOfAnotherUser() {
        this.anotherFleet = new Fleet();
    }

    @given('this vehicle has been registered into the other user\'s fleet')
    givenThisVehicleHasBeenRegisteredIntoTheOtherUserSFleet() {
        this.anotherFleet.registerVehicle(this.vehicle);
    }

    /** ALL WHEN */

    @when('I register this vehicle into my fleet')
    whenIRegisterThisVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    @when('I try to register this vehicle into my fleet')
    whenITryToRegisterThisVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    /** ALL THEN */

    @then('this vehicle should be part of my vehicle fleet')
    thenVehicleShouldBePartOfMyVehicleFleet() {
        expect(this.fleet.vehicles).include(this.vehicle);
    }

    @then('I should be informed this vehicle has already been registered into my fleet')
    thenIShouldBeInformedThisVehicleHasAlreadyBeenRegisteredIntoMyFleet() {
        expect(this.fleet.vehicles).to.have.members([this.vehicle]);
    }

}