import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, BeforeInsert } from 'typeorm';

import { Vehicle } from './vehicle.model';


@Entity()
export class Fleet {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToMany(_ => Vehicle, vehicle => vehicle, { cascade: true })
    @JoinTable()
    vehicles!: Array<Vehicle>;

    @BeforeInsert()
    private _(): void { this.vehicles = []; }

    private contains(vehicle: Vehicle): boolean {
        return this.vehicles.includes(vehicle);
    }

    registerVehicle(vehicle: Vehicle): void {
        if (!this.contains(vehicle)) {
            this.vehicles = [...this.vehicles, vehicle];
            return;
        }

        console.log('This vehicule is already registered in your fleet.');
    }

}
