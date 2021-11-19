import { Connection } from 'typeorm';
import { handleConnection } from '../connection';
import { Fleet } from '../../Domain/fleet.model';
import { Vehicle } from '../../Domain/vehicle.model';


export async function registerVehicle(fleetId: string, vehiclePlateNumber: string): Promise<void> {
    await handleConnection(async (connection: Connection) => {
        let fleet = await connection.getRepository(Fleet).findOne(fleetId);
        if (!fleet) {
            process.stderr.write(`This fleetId <${fleetId}> doesn\'t exist.`);
            return;
        }

        const vehicle = new Vehicle(vehiclePlateNumber);
        fleet.registerVehicle(vehicle);

        await connection.manager.save(fleet);
        process.stdout.write(`Vehicle <${vehicle.vehiclePlateNumber}> successfully registered.`);
    });
}