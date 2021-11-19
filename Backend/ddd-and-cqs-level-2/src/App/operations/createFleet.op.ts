import { Connection } from 'typeorm';
import { handleConnection } from '../connection';
import { User } from '../../Domain/user.model';
import { Fleet } from '../../Domain/fleet.model';


export async function createFleet(userId: string): Promise<void> {
    await handleConnection(async (connection: Connection) => {
        let user = (await connection.getRepository(User).findOne(userId)) || new User();

        const fleet = new Fleet();
        user.fleet = fleet;

        await connection.manager.save(user);
        process.stdout.write(`Fleet <${fleet.id}> successfully created.`);
    });
}