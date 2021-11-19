# Backend Section - Part 1 - DDD, CQS, BDD tests

Taken from Part 1, this is approximately the same structure:

- /App
    * /commands
        - ***.cmd.ts**: *command files, describing different CLI commands that can be used*
    * /operations
        - ***.op.ts**: *operation files, describing few CRUD (here just multiple CREATE) operations to persist data*
    * **cli.ts**: *CLI file that reads command and arguments passed in the terminal*
    * **connection.ts**: *handle connection for each above database operations*
- /Domain
    * ***.model.ts**: *model files, adapted to fit the database framework*
- /Infra
    * /database
        - **dbexport.pgsql**: *export file from my local postgresql database, not necessarily useful to read*
        - **tables.sql**: *more readable database file, with just tables that represent models*
    * /features
    * /step-definitions
- cucumber.js

---

I've used `typeorm` framework and `pg` package to link models to my `postgresql` database, and `yargs` library for CLI managing.

---

Run `npm i` to install dependencies, then both options again:
- `npm test`, same as previous part
- `npx tsc` to produce `/build` folder, then `npm link` to symlink custom prefix command (according to `bin` option in `package.json`), so now you can execute CLI command:
    * `fleet create <userId: uuid>` to create a new fleet for a given user (the fleetId is displayed in return)
    * `fleet register-vehicle <fleetId: uuid> <plateNumber: string>` to register vehicle to a given fleet
    * `fleet localize-vehicle <fleetId: uuid> <plateNumber: string> <lng: number> <lat: number> [alt: number]` to localize/park a vehicle according to new location (lng, lat and optional alt)