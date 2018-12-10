const express = require("express");
const knex = require("../db/client");
const router = express.Router();

router.get("/new", (req, res) => {
    res.render("posts/new");
})

router.post("/new", (req, res) => {
    knex("cohorts")
        .insert({
            name: req.body.name,
            logo_url: req.body.logo_url,
            members: req.body.members
        })
        .returning("*")
        .then(cohorts => {
            const [cohort] = cohorts;
            res.redirect(`/posts/${cohort.id}`)
        });
});

router.get("/", (req, res) => {
    knex("cohorts")
        .orderBy("name","desc")
        .then(cohorts => {
            res.render("posts/index", { cohorts: cohorts });
        });
});

router.get("/:id", (req, res, next) => {
    knex("cohorts")
        .where("id", req.params.id)
        .first()
        .then(cohort => {
            if (!cohort) {
                next(new Error("Page not found"));
            }
            res.render("posts/show", { cohort: cohort });
        });
});

router.delete("/:id", (req, res) => {
    knex("cohorts")
        .where("id", req.params.id)
        .del()
        .then(() => {
            res.redirect("/posts");
        });

});

router.get("/:id/edit", (req, res) => {
    knex("cohorts")
        .where("id", req.params.id)
        .first()
        .then(cohort => {
            res.render("posts/edit", { cohort: cohort});
        });
});

router.patch("/:id", (req, res) => {
    knex("cohorts", req.params.id)
        .update({
            name: req.body.name,
            logoUrl: req.body.logo_url,
            members: req.body.members
        })
        .then(() => {
            res.redirect(`/posts/${req.params.id}`);
        });
});

module.exports = router;