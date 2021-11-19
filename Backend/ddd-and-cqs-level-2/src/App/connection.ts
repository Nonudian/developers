import { Connection, createConnection } from 'typeorm';

import { User } from '../Domain/user.model';
import { Fleet } from '../Domain/fleet.model';
import { Vehicle } from '../Domain/vehicle.model';


async function connect(): Promise<Connection> {
    return createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'william',
        password: 'admin',
        database: 'dddandcqslevel2',
        entities: [User, Fleet, Vehicle],
        synchronize: true
    });
}

export async function handleConnection(operation: (connection: Connection) => Promise<void>): Promise<void> {
    const connection = await connect();
    await operation(connection);
    await connection.close();
}