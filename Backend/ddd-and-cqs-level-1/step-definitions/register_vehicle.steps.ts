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
        expect(this.fleet.vehicles).include(this.vehicle);
    }

}

@binding()
export class CantRegisterSameVehicleTwiceSteps {

    private fleet!: Fleet;
    private vehicle!: Vehicle;

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

    @when('I try to register this vehicle into my fleet')
    whenITryToRegisterThisVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    @then('I should be informed this vehicle has already been registered into my fleet')
    thenIShouldBeInformedThisVehicleHasAlreadyBeenRegisteredIntoMyFleet() {
        expect(this.fleet.vehicles).to.have.members([this.vehicle]);
    }

}

@binding()
export class SameVehicleCanBelongManyFleetSteps {

    private fleet!: Fleet;
    private anotherFleet!: Fleet;
    private vehicle!: Vehicle;

    @given('my fleet')
    givenMyFleet() {
        this.fleet = new Fleet();
    }

    @given('the fleet of another user')
    givenTheFleetOfAnotherUser() {
        this.anotherFleet = new Fleet();
    }

    @given('a vehicle')
    givenAVehicle() {
        this.vehicle = new Vehicle();
    }

    @given('this vehicle has been registered into the other user\'s fleet')
    givenThisVehicleHasBeenRegisteredIntoTheOtherUserSFleet() {
        this.anotherFleet.registerVehicle(this.vehicle);
    }

    @when('I register this vehicle into my fleet')
    whenIRegisterThisVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    @then('this vehicle should be part of my vehicle fleet')
    thenThisVehicleShouldBePartOfMyVehicleFleet() {
        expect(this.fleet.vehicles).include(this.vehicle);
    }

}