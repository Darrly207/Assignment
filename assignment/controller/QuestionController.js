const QuestionService = require("../services/QuestionService");

const createQuestion = async (req, res) => {
  try {
    const { text, options, correctAnswerIndex } = req.body;
    if (!text || !options || !correctAnswerIndex) {
      return res.status(400).json({
        status: "Error",
        message: "text, options, correctAnswerIndex are required",
      });
    }
    const response = await QuestionService.createQuestion({
      text,
      options,
      correctAnswerIndex,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message || "Internal Server Error",
    });
  }
};

const getAllQuestion = async (req, res) => {
  try {
    const response = await QuestionService.getAllQuestion();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message || "Internal Server Error",
    });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        status: "Error",
        message: "ID is required",
      });
    }
    const response = await QuestionService.getQuestionById(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message || "Internal Server Error",
    });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const { text, options, correctAnswerIndex } = req.body;
    const id = req.params.questionId;
    if (!id || !text || !options || !correctAnswerIndex) {
      return res.status(400).json({
        status: "Error",
        message: "ID, text, options, correctAnswerIndex are required",
      });
    }
    const response = await QuestionService.updateQuestion({
      id,
      text,
      options,
      correctAnswerIndex,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message || "Internal Server Error",
    });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        status: "Error",
        message: "ID is required",
      });
    }
    const response = await QuestionService.deleteQuestion(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = {
  createQuestion,
  getAllQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};
