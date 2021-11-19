import type { Arguments, CommandBuilder } from 'yargs';
import { localizeVehicle } from '../operations/localizeVehicle.op';


interface Options {
    fleetId: string;
    vehiclePlateNumber: string;
    lng: number;
    lat: number;
    alt?: number;
};

export const command = 'localize-vehicle <fleetId> <vehiclePlateNumber> <lng> <lat> [alt]';
export const desc = 'Localize an existing <vehiclePlateNumber> vehicle at given coordinates';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs
        .positional('fleetId', { type: 'string', demandOption: true })
        .positional('vehiclePlateNumber', { type: 'string', demandOption: true })
        .positional('lng', { type: 'number', demandOption: true })
        .positional('lat', { type: 'number', demandOption: true })
        .positional('alt', { type: 'number' });

export const handler = async ({ fleetId, vehiclePlateNumber, lng, lat, alt }: Arguments<Options>): Promise<void> => {
    await localizeVehicle(fleetId, vehiclePlateNumber, lng, lat, alt);
    process.exit(0);
};