/* short glimpse of database tables based on models */

-- USER (id, fleet_id)
CREATE TABLE public.application_user (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    fleet_id uuid
);

-- FLEET (id)
CREATE TABLE public.fleet (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL
);

-- JOIN FLEET AND VEHICLES
CREATE TABLE public.fleet_vehicles_vehicle (
    "fleetId" uuid NOT NULL,
    "vehicleVehiclePlateNumber" character varying NOT NULL
);

-- VEHICLE (plateNumber, location (longitude, latitude, altitude))
CREATE TABLE public.vehicle (
    "vehiclePlateNumber" character varying NOT NULL,
    longitude numeric,
    latitude numeric,
    altitude numeric
);
