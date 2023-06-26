import express, { Application } from "express";
import cors from "cors";
import router from "./routes/userRouter";

const appConfig = (app: Application) => {
  app
    // middlewares
    .use(express.json())
    .use(cors())

    //routes
    .use("/api", router);
};

export default appConfig;
