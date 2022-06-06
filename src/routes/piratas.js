var express = require("express");
var router = express.Router();

var pirataController = require("../controllers/pirataController.js");

router.get("/", function (req, res) {
    pirataController.testar(req, res);
});

router.get("/listar", function (req, res) {
    pirataController.listar(req, res);
});
router.get("/listarPorUsuario/:idUsuario", function (req, res) {
    pirataController.listarPorUsuario(req, res);
});
router.get("/listarPorBando/:idBando", function (req, res) {
    pirataController.listarPorBando(req, res);
});

module.exports = router;