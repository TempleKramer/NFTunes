const router = require("express").Router();

router.get("/", (req, res) => {
 res.render("ok")
});

module.exports = router;