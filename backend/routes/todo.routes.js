// CRUD - create, read, update, delete

const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")

// /cats/ Get endpoint level middleware
router.get("/", todoController.read)
router.post("/:title/:priority", todoController.create)
//router.put("/:name", todoController.update)
//router.delete("/:name", todoController.delete)

module.exports = router
