import express, { Application } from "express";
import appConfig from "./app";
import dbConfig from "./config/DB";

const app: Application = express();

const Port = 4000;
const server = async () => {
  try {
    appConfig(app); // initialize app

    dbConfig(); // initialize db

    // server listening
    app.listen(Port, () => {
      console.log(`Server listening on ${Port}`);
    });
  } catch (error: any) {
    console.log(error);
  }
};

// Server initialization
server();
