import { Application } from "express";
import quiz from"./quiz.route";
import question from "./question.route"

const routes = (app: Application):void => {
  app.use('/questions', question);
  app.use('/quizzes', quiz);
};

export default routes;
