import type { Arguments, CommandBuilder } from 'yargs';
import { createFleet } from '../operations/createFleet.op';


interface Options {
    userId: string;
};

export const command = 'create <userId>';
export const desc = 'Create a new fleet for <userId>';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs.positional('userId', { type: 'string', demandOption: true });

export const handler = async ({ userId }: Arguments<Options>): Promise<void> => {
    await createFleet(userId);
    process.exit(0);
};