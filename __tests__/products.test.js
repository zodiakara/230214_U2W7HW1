// by default jest doesn't work with the new import sybtax
// we should add NODEOPTIONS=--experimental-vm-modules to the test script in package.json to enable the usega of import syntax
// on windows you cannot use NODE_OPTIONS (and all env vars) -> you need to add cross-env package

import supertest from "supertest";
import dotenv from "dotenv";
import mongoose from "mongoose";
import server from "../src/server";

dotenv.config(); // a function that loads all the .env vars - you do that when you cannot use -r dotenv config in json -> it works only on npm run dev not in npm run tests!!!
const client = supertest(server);

// beforeAll is a Jest hook ran before all the tests, usually it is used to connect to the db and to do some initial setup
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL_TEST);
});

// afterAll hook could be used to clean up the situation (close the connection to mongo gently and clean up the db)
afterAll(async () => {});

describe("test API's", () => {});
