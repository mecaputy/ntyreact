const axios = require("axios");
const router = require("express").router();

router.get("/articles", (req, res) => {
    Article.creat(req.body)
    .then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;