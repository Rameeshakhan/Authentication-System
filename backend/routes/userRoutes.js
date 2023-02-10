const express = require("express");
const router = express.Router();

//COntroller
const userController = require("../controllers/userController")
router.route("/").post(userController.createUser)

router.route("/:id").get(userController.getUser)
module.exports = router;