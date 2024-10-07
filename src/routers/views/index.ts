import quiz from "../views/quiz.route";
import question from "../views/question.route";
import { Application } from "express";

const routes = (app: Application): void => {
  app.use('/questions', question);
  app.use('/quizzes', quiz);
};

export default routes;
