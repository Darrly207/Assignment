import express from 'express';
import {
	createQuestion,
	deleteQuestion,
	getAllQuestions,
	getQuestionById,
	updateQuestion,
} from '../../controller/API/QuestionController';

const router = express.Router();

router.get('/', getAllQuestions);

router.get('/:questionId', getQuestionById);

router.post('/', createQuestion);

router.put('/:questionId', updateQuestion);

router.delete('/:questionId', deleteQuestion);

export default router;
