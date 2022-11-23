require("dotenv").config();

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());

mongoose.connect(process.env.MONGO_ONEVIEW_URI);
const db = mongoose.connection;

db.on("error", (err) => console.log("Mongoose Error", err));

db.once("open", async () => {
    const routes = require("./routes");
    app.use(routes());
    app.listen(process.env.PORT, () => {
        console.log("Connected to the db !!!");
        console.log(`server started at ${process.env.PORT}`);
    });
});
