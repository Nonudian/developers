--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: application_user; Type: TABLE; Schema: public; Owner: william
--

CREATE TABLE public.application_user (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    fleet_id uuid
);


ALTER TABLE public.application_user OWNER TO william;

--
-- Name: fleet; Type: TABLE; Schema: public; Owner: william
--

CREATE TABLE public.fleet (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL
);


ALTER TABLE public.fleet OWNER TO william;

--
-- Name: fleet_vehicles_vehicle; Type: TABLE; Schema: public; Owner: william
--

CREATE TABLE public.fleet_vehicles_vehicle (
    "fleetId" uuid NOT NULL,
    "vehicleVehiclePlateNumber" character varying NOT NULL
);


ALTER TABLE public.fleet_vehicles_vehicle OWNER TO william;

--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: william
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO william;

--
-- Name: vehicle; Type: TABLE; Schema: public; Owner: william
--

CREATE TABLE public.vehicle (
    "vehiclePlateNumber" character varying NOT NULL,
    longitude numeric,
    latitude numeric,
    altitude numeric
);


ALTER TABLE public.vehicle OWNER TO william;

--
-- Data for Name: application_user; Type: TABLE DATA; Schema: public; Owner: william
--

COPY public.application_user (id, fleet_id) FROM stdin;
9da528b1-13d8-4b7e-b4a1-569801b48d07	5ff23733-629f-49fb-abcf-efe2179ae660
8bcf4de9-6c31-4d3b-ac39-f048a6a8826d	8caa59fe-86c5-46a8-b928-26b1edb83f5c
6cdd189e-2bef-4b0a-b30f-0e7b8afdcf28	cff797c1-1d90-4557-b209-d7d383fbbc00
\.


--
-- Data for Name: fleet; Type: TABLE DATA; Schema: public; Owner: william
--

COPY public.fleet (id) FROM stdin;
5ff23733-629f-49fb-abcf-efe2179ae660
8caa59fe-86c5-46a8-b928-26b1edb83f5c
cff797c1-1d90-4557-b209-d7d383fbbc00
\.


--
-- Data for Name: fleet_vehicles_vehicle; Type: TABLE DATA; Schema: public; Owner: william
--

COPY public.fleet_vehicles_vehicle ("fleetId", "vehicleVehiclePlateNumber") FROM stdin;
8caa59fe-86c5-46a8-b928-26b1edb83f5c	AA-229-AC
cff797c1-1d90-4557-b209-d7d383fbbc00	AA-229-AC
\.


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: william
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: william
--

COPY public.vehicle ("vehiclePlateNumber", longitude, latitude, altitude) FROM stdin;
AA-229-AC	-92.634	30.123	707
\.


--
-- Name: fleet PK_17e0760d2492f67c67ce0fe4aa7; Type: CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.fleet
    ADD CONSTRAINT "PK_17e0760d2492f67c67ce0fe4aa7" PRIMARY KEY (id);


--
-- Name: application_user PK_42f0935cc814e694ed0e61fdece; Type: CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.application_user
    ADD CONSTRAINT "PK_42f0935cc814e694ed0e61fdece" PRIMARY KEY (id);


--
-- Name: fleet_vehicles_vehicle PK_4d6809a2e1f93fb11772ff8e5bd; Type: CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.fleet_vehicles_vehicle
    ADD CONSTRAINT "PK_4d6809a2e1f93fb11772ff8e5bd" PRIMARY KEY ("fleetId", "vehicleVehiclePlateNumber");


--
-- Name: vehicle PK_ffd3fc890a26c8ac734c7135b43; Type: CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT "PK_ffd3fc890a26c8ac734c7135b43" PRIMARY KEY ("vehiclePlateNumber");


--
-- Name: application_user REL_de3d37552efbd995e929f77f7d; Type: CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.application_user
    ADD CONSTRAINT "REL_de3d37552efbd995e929f77f7d" UNIQUE (fleet_id);


--
-- Name: IDX_63342655c567e59770546d610d; Type: INDEX; Schema: public; Owner: william
--

CREATE INDEX "IDX_63342655c567e59770546d610d" ON public.fleet_vehicles_vehicle USING btree ("vehicleVehiclePlateNumber");


--
-- Name: IDX_deb4414d9c97dadb8ee6398da6; Type: INDEX; Schema: public; Owner: william
--

CREATE INDEX "IDX_deb4414d9c97dadb8ee6398da6" ON public.fleet_vehicles_vehicle USING btree ("fleetId");


--
-- Name: fleet_vehicles_vehicle FK_63342655c567e59770546d610d0; Type: FK CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.fleet_vehicles_vehicle
    ADD CONSTRAINT "FK_63342655c567e59770546d610d0" FOREIGN KEY ("vehicleVehiclePlateNumber") REFERENCES public.vehicle("vehiclePlateNumber") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: application_user FK_de3d37552efbd995e929f77f7d7; Type: FK CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.application_user
    ADD CONSTRAINT "FK_de3d37552efbd995e929f77f7d7" FOREIGN KEY (fleet_id) REFERENCES public.fleet(id);


--
-- Name: fleet_vehicles_vehicle FK_deb4414d9c97dadb8ee6398da69; Type: FK CONSTRAINT; Schema: public; Owner: william
--

ALTER TABLE ONLY public.fleet_vehicles_vehicle
    ADD CONSTRAINT "FK_deb4414d9c97dadb8ee6398da69" FOREIGN KEY ("fleetId") REFERENCES public.fleet(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

