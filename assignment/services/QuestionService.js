const Question = require("../models/Question");

const createQuestion = async ({ text, options, correctAnswerIndex }) => {
  try {
    const checkQuestion = await Question.findOne({ text });
    if (checkQuestion) {
      return {
        status: "Error",
        message: "Question text already exists",
      };
    }
    const newQuestion = await Question.create({
      text,
      options,
      correctAnswerIndex,
    });
    return {
      status: "OK",
      message: "Question created successfully",
      data: newQuestion,
    };
  } catch (error) {
    throw {
      status: "ERR",
      message: error.message || "Internal Server Error",
    };
  }
};

const getAllQuestion = async () => {
  try {
    const allQuestions = await Question.find();
    return {
      status: "OK",
      data: allQuestions,
    };
  } catch (error) {
    throw {
      status: "ERR",
      message: error.message || "Internal Server Error",
    };
  }
};

const getQuestionById = async (id) => {
  try {
    const question = await Question.findById(id);
    if (!question) {
      return {
        status: "Error",
        message: "Question not found",
      };
    }
    return {
      status: "OK",
      data: question,
    };
  } catch (error) {
    throw {
      status: "ERR",
      message: error.message || "Internal Server Error",
    };
  }
};

const updateQuestion = async ({
  id,
  text,
  options,
  keywords,
  correctAnswerIndex,
}) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      {
        text,
        options,
        keywords,
        correctAnswerIndex,
      },
      { new: true }
    );

    if (!updatedQuestion) {
      return {
        status: "Error",
        message: "Question not found",
      };
    }

    return {
      status: "OK",
      data: updatedQuestion,
    };
  } catch (error) {
    throw {
      status: "ERR",
      message: error.message || "Internal Server Error",
    };
  }
};

const deleteQuestion = async (id) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(id);
    if (!deletedQuestion) {
      return {
        status: "Error",
        message: "Question not found",
      };
    }
    return {
      status: "OK",
      message: "Question deleted successfully",
    };
  } catch (error) {
    throw {
      status: "ERR",
      message: error.message || "Internal Server Error",
    };
  }
};

module.exports = {
  createQuestion,
  getAllQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};
