const express = require("express");
const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../../controllers/api/contactsController");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   getAll(req, res, next);
// });
router.get("/", getAll);

// router.get("/:contactId", (req, res, next) => {
//   getById(req, res, next);
// });
router.get("/:contactId", getById);

// router.post("/", (req, res, next) => {
//   create(req, res, next);
// });
router.post("/", create);

// router.put("/:contactId", (req, res, next) => {
//   update(req, res, next);
// });
router.put("/:contactId", update);

// router.delete("/:contactId", (req, res, next) => {
//   deleteById(req, res, next);
// });
router.delete("/:contactId", deleteById);

module.exports = router;
