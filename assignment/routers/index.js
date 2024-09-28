const QuizRouter = require("./quizRouter");
const QuestionRouter = require("./questionRouter");
const routes = (app) => {
  app.use("/quiz", QuizRouter);
  app.use("/question", QuestionRouter);
};
module.exports = routes;
