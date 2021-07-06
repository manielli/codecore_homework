const path = require("path");
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true}));

app.use( methodOverride((req,res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            return method;
        }
    })
);


const baseRouter = require("./routes/base");
const postsRouter = require("./routes/posts");

app.use("/", baseRouter);
app.use("/posts", postsRouter);

const PORT = 5050;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
    console.log(`Server is running. Listening on http://${HOST}:${PORT}`);
});