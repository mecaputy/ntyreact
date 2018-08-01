const router = require ("express").Router();
const articleRoutes = require ("./apiRoutes")

router.use ("/articles", articleRoutes)

module.exports = router