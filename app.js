const path = require("path");
const express = require("express");
const logger = require("morgan");

const app = express();
app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true}));

const PORT = 5050;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
    console.log(`Server is running. Listening on http://${HOST}:${PORT}`);
});