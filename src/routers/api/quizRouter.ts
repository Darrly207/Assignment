import express from 'express';
import {
	createManyQuestionsForQuiz,
	createOneQuestionForQuiz,
	createQuiz,
	deleteQuiz,
	getAllQuizzes,
	getCapitalQuestions,
	getQuizById,
	updateQuiz,
} from '../../controller/API/QuizController';

const router = express.Router();

router.get('/', getAllQuizzes);

router.get('/:quizId', getQuizById);

router.post('/', createQuiz);

router.put('/:quizId', updateQuiz);

router.delete('/:quizId', deleteQuiz);

router.get('/:quizId/populate', getCapitalQuestions);

router.post('/:quizId/question', createOneQuestionForQuiz);

router.post('/:quizId/questions', createManyQuestionsForQuiz);

export default router;
