const router = require("express").router();
const articlesController = require("../controllers/articlesController");

router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

module.exports = router;