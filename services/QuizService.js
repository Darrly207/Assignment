const Question = require("../models/Question");
const Quiz = require("../models/Quiz");

const createQuiz = ({ title, description, question }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdQuestions = await Question.insertMany(questions);
      const questionIds = createdQuestions.map((q) => q._id);

      const quiz = await Quiz.create({
        title,
        description,
        questions: questionIds,
      });

      resolve({
        status: "ok",
        message: "Quiz created successfully",
        data: quiz,
      });
    } catch (error) {
      reject({
        status: "ERR",
        message: error.message || "Internal Server Error",
      });
    }
  });
};

const getAllQuiz = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allQuiz = await Quiz.find();
      resolve({
        status: "ok",
        data: allQuiz,
      });
    } catch (error) {
      reject({
        status: "ERR",
        message: error.message || "Internal Server Error",
      });
    }
  });
};

const updateQuiz = ({ quizId, title, description, question }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const quiz = await Quiz.findById(quizId);
      if (!quiz) {
        return resolve({
          status: "error",
          message: "Quiz not found",
        });
      }

      const updatedQuiz = await Quiz.findByIdAndUpdate(
        quizId,
        { title, description, question },
        { new: true }
      );

      resolve({
        status: "ok",
        message: "Quiz updated successfully",
        data: updatedQuiz,
      });
    } catch (error) {
      reject({
        status: "ERR",
        message: error.message || "Internal Server Error",
      });
    }
  });
};

const deleteQuiz = (quizId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
      if (!deletedQuiz) {
        return resolve({
          status: "error",
          message: "Quiz ID not found",
        });
      }
      resolve({
        status: "ok",
        message: "Quiz deleted successfully",
      });
    } catch (error) {
      reject({
        status: "ERR",
        message: error.message || "Internal Server Error",
      });
    }
  });
};

module.exports = {
  createQuiz,
  getAllQuiz,
  updateQuiz,
  deleteQuiz,
};
