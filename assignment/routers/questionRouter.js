const express = require("express");
const router = express.Router();
const QuestionController = require("../controller/QuestionController");

router.get("/", QuestionController.getAllQuestion);
router.put("/:id", QuestionController.updateQuestion);
router.delete("/:id", QuestionController.deleteQuestion);
router.post("/", QuestionController.createQuestion);
router.get("/:id", QuestionController.getQuestionById);
module.exports = router;
