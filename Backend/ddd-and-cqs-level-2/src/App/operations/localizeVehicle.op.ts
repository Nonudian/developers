import { Connection } from 'typeorm';
import { handleConnection } from '../connection';
import { Fleet } from '../../Domain/fleet.model';
import { Vehicle } from '../../Domain/vehicle.model';


export async function localizeVehicle(fleetId: string, vehiclePlateNumber: string, longitude: number, latitude: number, altitude?: number): Promise<void> {
    await handleConnection(async (connection: Connection) => {
        let fleet = await connection.getRepository(Fleet).findOne(fleetId);
        if (!fleet) {
            process.stderr.write(`This fleetId <${fleetId}> doesn\'t exist.`);
            return;
        }

        let vehicle = await connection.getRepository(Vehicle).findOne(vehiclePlateNumber);
        if (!vehicle) {
            process.stderr.write(`This vehiclePlateNumber <${vehiclePlateNumber}> doesn\'t exist.`);
            return;
        }

        vehicle.updateLocation({ longitude, latitude, altitude: altitude || -1 });

        await connection.manager.save(vehicle);
        process.stdout.write(`Vehicle <${vehiclePlateNumber}> successfully localized/parked.`);
    });
}


