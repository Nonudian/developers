import { User } from '../Domain/user.model';
import { Fleet } from '../Domain/fleet.model';
import { Vehicle } from '../Domain/vehicle.model';
import { Location } from '../Domain/location.model';


const me = new User();                                      //userId = 0

const myNewFleet = new Fleet();                             //fleetId = 0

const myNewVehicle = new Vehicle('AA-229-AA');              //plateNumber = 'AA-229-AA'
myNewFleet.registerVehicle(myNewVehicle);                   //myNewFleet.vehicles = [myNewVehicle]

const myNewLocation = new Location(-92.634, 30.123, 707);
myNewVehicle.updateLocation(myNewLocation);                 //myNewVehicle.location = { longitude: -92.634, latitude: 30.123, altitude: 707 }