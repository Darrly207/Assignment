const Quiz = require("../models/Quiz"); // Ensure the correct path
const Question = require("../models/Question"); // Ensure the correct path

const createQuiz = async (req, res) => {
  const { title, description, questions } = req.body;

  if (!title || !description || !Array.isArray(questions)) {
    return res.status(400).json({
      status: "Error",
      message: "Title, description, and questions are required.",
    });
  }

  try {
    // Create questions and store their IDs
    const createdQuestions = await Question.insertMany(questions);

    // Extract the IDs of the created questions
    const questionIds = createdQuestions.map((q) => q._id);

    // Create the quiz with the question IDs
    const quiz = new Quiz({
      title,
      description,
      questions: questionIds,
    });

    const newQuiz = await quiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message || "Internal Server Error",
    });
  }
};
const getAllQuiz = async (req, res) => {
  try {
    const response = await QuizService.getAllQuiz();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Internal Server Error",
    });
  }
};

const updateQuiz = async (req, res) => {
  try {
    const { title, description, question } = req.body;
    const quizId = req.params.id;
    if (!quizId || !title || !description) {
      return res.status(400).json({
        status: "error",
        message: "quizId, title, description not found",
      });
    }
    const response = await QuizService.updateQuiz({
      quizId,
      title,
      description,
      question,
    });
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Internal Server Error",
    });
  }
};
const deleteQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    if (!quizId) {
      return {
        status: "Error",
        message: "Quiz ID is require",
      };
    }
    const response = await QuizService.deleteQuiz(quizId);
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Internal Server Error",
    });
  }
};
module.exports = {
  createQuiz,
  getAllQuiz,
  updateQuiz,
  deleteQuiz,
};
