import { User } from '../Domain/user.model';
import { Fleet } from '../Domain/fleet.model';
import { Vehicle } from '../Domain/vehicle.model';
import { Location } from '../Domain/location.model';


const me = new User();
console.log(`userId: ${me.userId}`);                                //userId: 0

const myNewFleet = new Fleet();
console.log(`fleetId: ${myNewFleet.fleetId}`);                      //fleetId: 0

const myNewVehicle = new Vehicle('AA-229-AA');
console.log(`plateNumber: ${myNewVehicle.vehiclePlateNumber}`);     //plateNumber: 'AA-229-AA'  
console.log(`location: ${myNewVehicle.location}`);                  //location: { 0, 0, 0 }

myNewFleet.registerVehicle(myNewVehicle);
console.log(`vehicles: ${myNewFleet.vehicles}`);                    //vehicles: [myNewVehicle]

const myNewLocation = new Location(-92.634, 30.123, 707);
myNewVehicle.updateLocation(myNewLocation);
console.log(`newLocation: ${myNewVehicle.location}`);               //newLocation: { -92.634, 30.123, 707 }