import { binding, given, then, when } from 'cucumber-tsflow';
import { expect } from 'chai';

import { Fleet } from '@model/fleet.model';
import { Vehicle } from '@model/vehicle.model';


@binding()
export class RegisterVehicleSteps {

    private fleet!: Fleet;
    private vehicle!: Vehicle;
    private anotherFleet!: Fleet;

    @given('my fleet')
    givenMyFleet() {
        this.fleet = new Fleet();
        this.fleet.build();
    }

    @given('a vehicle')
    givenAVehicle() {
        this.vehicle = new Vehicle('AA-229-AA');
    }

    @given('I have registered this vehicle into my fleet')
    givenIHaveRegisteredThisVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    @given('the fleet of another user')
    givenTheFleetOfAnotherUser() {
        this.anotherFleet = new Fleet();
        this.anotherFleet.build();
    }

    @given('this vehicle has been registered into the other user\'s fleet')
    givenThisVehicleHasBeenRegisteredIntoTheOtherUserSFleet() {
        this.anotherFleet.registerVehicle(this.vehicle);
    }

    @when('I register this vehicle into my fleet')
    @when('I try to register this vehicle into my fleet')
    whenRegisteringVehicleIntoMyFleet() {
        this.fleet.registerVehicle(this.vehicle);
    }

    @then('this vehicle should be part of my vehicle fleet')
    thenVehicleShouldBePartOfMyVehicleFleet() {
        expect(this.fleet.vehicles).include(this.vehicle);
    }

    @then('I should be informed this vehicle has already been registered into my fleet')
    thenIShouldBeInformedThisVehicleHasAlreadyBeenRegisteredIntoMyFleet() {
        expect(this.fleet.vehicles).to.have.members([this.vehicle]);
    }

}