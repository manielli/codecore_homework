const express = require("express");
// const knex = require("../db/client");
const router = express.Router();

router.get("/new", (req, res) => {
    res.render("posts/new");
})


module.exports = router;