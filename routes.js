const express = require("express");

const { RouteNotFoundError } = require("./src/lib/error");

const apiRouter = express.Router();

module.exports = () => {
    apiRouter
        .get("/healthcheck", (req, res) => {
            console.log("Server is up and running !!!");
            res.send({ message: "Server is up and running !!!" });
        })
        .all("*", () => {
            throw new RouteNotFoundError();
        });
    return apiRouter;
};
