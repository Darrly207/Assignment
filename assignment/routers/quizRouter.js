const express = require("express");
const router = express.Router();
const QuizController = require("../controller/QuizController");

router.get("/", QuizController.getAllQuiz);
router.put("/:id", QuizController.updateQuiz);
router.delete("/:id", QuizController.deleteQuiz);
router.post("/", QuizController.createQuiz);
module.exports = router;
