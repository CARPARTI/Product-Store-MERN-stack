const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");


router.get("/",booksController.getAllBooks); // get from database
router.post("/",booksController.addBook); //post to database
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
//router.get("/:id",booksController);

module.exports = router;