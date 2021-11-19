import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Fleet } from './fleet.model';


@Entity({ name: 'application_user' })
export class User {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @OneToOne(_ => Fleet, fleet => fleet, { cascade: true })
    @JoinColumn({ name: 'fleet_id', referencedColumnName: 'id' })
    fleet!: Fleet;

}
