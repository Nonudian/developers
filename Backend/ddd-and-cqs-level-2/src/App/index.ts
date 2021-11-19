import { createConnection } from 'typeorm';

import { User } from '../Domain/user.model';
import { Fleet } from '../Domain/fleet.model';
import { Vehicle } from '../Domain/vehicle.model';


createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'william',
    password: 'admin',
    database: 'dddandcqslevel2',
    entities: [User, Fleet, Vehicle],
    synchronize: true
}).then(async connection => {

    /* USER REGISTRATION */
    let newUser = new User();
    await connection.manager.save(newUser);

    /* FLEET ADDING */
    let newFleet = new Fleet();
    newUser.fleet = newFleet;
    await connection.manager.save(newUser);

    /* VEHICLE ADDING */
    let newVehicle = new Vehicle('AA-229-AC');
    newFleet.registerVehicle(newVehicle);
    await connection.manager.save(newUser);

    // /* VEHICLE PARKING */
    newVehicle.updateLocation({
        longitude: -92.634,
        latitude: 30.123,
        altitude: 707
    });
    await connection.manager.save(newUser);

    console.dir(newUser, { depth: 4 });

    await connection.close();

}).catch(error => console.log(error));