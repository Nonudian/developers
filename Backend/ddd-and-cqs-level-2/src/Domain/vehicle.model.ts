import { Entity, PrimaryColumn, Column } from 'typeorm';


export interface Location {
    longitude: number;
    latitude: number;
    altitude: number;
};

@Entity()
export class Vehicle implements Location {

    @PrimaryColumn()
    vehiclePlateNumber!: string;

    @Column({ type: 'numeric', nullable: true })
    longitude!: number;

    @Column({ type: 'numeric', nullable: true })
    latitude!: number;

    @Column({ type: 'numeric', nullable: true })
    altitude!: number;

    constructor(vehiclePlateNumber: string) {
        this.vehiclePlateNumber = vehiclePlateNumber;
    }

    getLocation(): Location {
        return {
            longitude: this.longitude,
            latitude: this.latitude,
            altitude: this.altitude
        };
    }

    private isAlreadyParkedAt({ longitude, latitude, altitude }: Location): boolean {
        return this.longitude === longitude
            && this.latitude === latitude
            && this.altitude === altitude;
    }

    updateLocation(location: Location): void {
        if (!this.isAlreadyParkedAt(location)) {
            const { longitude, latitude, altitude } = location;
            this.longitude = longitude;
            this.latitude = latitude;
            this.altitude = altitude;
            return;
        }

        console.log('This vehicule is already parked at this location.');
    }

}
