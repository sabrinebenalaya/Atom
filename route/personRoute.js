const express = require("express");
const {
  getAllPersons,
  getOnePerson,
  deletePerson,
  updatePerson,
  createPerson,
  searchByName,
  filterAge,
} = require("../controllers/personController.js");
const router = express.Router();
router.get("/person", getAllPersons);
router.get("/person/:id", getOnePerson);
router.delete("/person/:id", deletePerson);
router.put("/person/:id", updatePerson);
router.post("/person", createPerson);
router.get("/search", searchByName);
router.get("/filter", filterAge);
module.exports = router;
