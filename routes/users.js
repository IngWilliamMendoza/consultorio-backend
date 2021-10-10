const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.crearUsuario);
router.get("/", userController.getUsers);
router.put("/:id", userController.updateUser);
router.get("/:id", userController.getUserId);
router.delete("/:id", userController.deleteUser);

module.exports = router;
