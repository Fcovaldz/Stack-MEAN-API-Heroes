const Heros = require("../controller/heroes.controller");

var router = require("express").Router();

    // GET Methods

    // GET all
router.get("/", heroes.findAll);

    // GET by id
router.get("/:id", heroes.findOne);

    // GET by term
router.get("/", heroes.findSome);

    // GET active
router.get("/", heroes.findActive);

// POST heroes
router.post("/", heroes.create);

// DELETE heroe
router.delete("/:id",heroes.delete);

// PUT heroe 
router.put("/:id", heroes.update);

module.exports = router;