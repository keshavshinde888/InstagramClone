const express = require("express");
const router = express.Router();
const {
    Fileupload
} = require("../Controller/index");
//router.route("/register").get(getData);
router.route("/upload").post(Fileupload);

module.exports = router;
