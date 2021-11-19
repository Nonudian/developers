import type { Arguments, CommandBuilder } from 'yargs';
import { registerVehicle } from '../operations/registerVehicle.op';


interface Options {
    fleetId: string;
    vehiclePlateNumber: string;
};

export const command = 'register-vehicle <fleetId> <vehiclePlateNumber>';
export const desc = 'Register a new <vehiclePlateNumber> vehicle into the given fleet <fleetId>';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs
        .positional('fleetId', { type: 'string', demandOption: true })
        .positional('vehiclePlateNumber', { type: 'string', demandOption: true });

export const handler = async ({ fleetId, vehiclePlateNumber }: Arguments<Options>): Promise<void> => {
    await registerVehicle(fleetId, vehiclePlateNumber);
    process.exit(0);
};