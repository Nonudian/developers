# Backend Section - Part 1 - DDD, CQS, BDD tests

As described in title, I've tried to structure and implement the code according to **DDD (Driven Development Design)** and **CQS (Command & Query Segregation)** for architecture, as well as **BDD (Behavior Driven Development)** for tests.

The code is so architectured as follows:
- /App
    * **index.ts**: *main file, used to instantiate all model-based objects and display their good working*
- /Domain
    * ***.model.ts**: *model files, a little bit modified in Part 2 to fit the database structure*
- /Infra
    * /features
        - ***.feature**: *feature file, used to describe (in human language) feature and suited scenarios, read by cucumber.js*
    * /step-definitions
        - ***.steps.ts**: *steps file, used to describe (in typescript) feature and suited scenarios, also read by cucumber.js*
- **cucumber.js**: cucumber profile used to perform tests

---

Run `npm i` to install dependencies, then both options:
- `npm start` to execute `index.ts` and verify model instantiations
- `npm test` to execute bdd tests with `cucumber.js` library (using `cucumber-tsflow` for typescript and `chai` for assertions/expectations)