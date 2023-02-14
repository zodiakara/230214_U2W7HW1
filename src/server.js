import express from "express";
import cors from "cors";
import productsRouter from "./api/products/index.js";
import { badRequestHandler, genericErrorHandler } from "./errorHandlers.js";

const server = express();
// middlewares
server.use(cors());
server.use(express.json());

// endpoints
server.use("/products", productsRouter);
// error handlers
server.use(badRequestHandler);
server.use(genericErrorHandler);
export default server;
