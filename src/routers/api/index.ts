import quizApi from "./quizRouter";
import questionApi from "./questionRouter";
import { Application } from "express";

const routes = (app: Application): void => {
  app.use('/api/questions', questionApi);
  app.use('/api/quizzes', quizApi);
};

export default routes;
