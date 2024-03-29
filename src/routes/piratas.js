var express = require("express");
var router = express.Router();

var pirataController = require("../controllers/pirataController.js");

router.get("/", function (req, res) {
    pirataController.testar(req, res);
});

router.get("/listar", function (req, res) {
    pirataController.listar(req, res);
});
router.get("/listarBando", function (req, res) {
    pirataController.listarBando(req, res);
});
router.get("/numeroPirata", function (req, res) {
    pirataController.numeroPirata(req, res);
});
router.get("/listarPorUsuario/:idUsuario", function (req, res) {
    pirataController.listarPorUsuario(req, res);
});
router.get("/listarPorBando/:idBando", function (req, res) {
    pirataController.listarPorBando(req, res);
});
router.get("/verificarPirataDeck/:idUsuario,:idBando,:idPirata", function (req, res) {
    pirataController.verificarPirataDeck(req, res);
});
router.post("/adicionarPirata", function (req, res) {
    pirataController.adicionarPirata(req, res);
});
router.delete("/deletarDeck", function (req, res) {
    pirataController.deletarDeck(req, res);
});

module.exports = router;