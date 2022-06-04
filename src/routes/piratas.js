var express = require("express");
var router = express.Router();

var pirataController = require("../controllers/pirataController.js");

router.get("/", function (req, res) {
    pirataController.testar(req, res);
});

router.get("/listar", function (req, res) {
    pirataController.listar(req, res);
});
router.get("/listarNumeroRegistro", function (req, res) {
    pirataController.listar(req, res);
});

module.exports = router;