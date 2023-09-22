import express from "express";
import imgProgRouter from "./imgProgRouter";

const appRouter = express.Router();

appRouter.use("/img-prog", imgProgRouter);

export default appRouter;
