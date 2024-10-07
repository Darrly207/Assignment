import { Request, Response } from 'express';
import { IQuiz } from '../../models/Quiz';
import { server } from '../../config/config';
import axios from 'axios';
import { IQuestion } from '../../models/Question';

export const allQuizzes = async (req: Request, res: Response) => {
	const response = await axios.get<IQuiz[]>(
		`${server.schema}://${server.host}:${server.port}/api/quizzes`,
	);

	const quizzes = response.data;

	res.render('quizzes/allQuizzes', { quizzes: quizzes });
};

export const newQuiz = async (req: Request, res: Response) => {
	res.render('quizzes/newQuiz');
};

export const displayQuiz = async (req: Request, res: Response) => {
	const { id } = req.query;

	const response = await axios.get<IQuiz>(
		`${server.schema}://${server.host}:${server.port}/api/quizzes/${id}`,
	);

	const quiz = response.data;

	const questionPromises = quiz.questions.map(async (questionId) => {
		const questionResponse = await axios.get<IQuestion>(
			`${server.schema}://${server.host}:${server.port}/api/questions/${questionId}`,
		);
		return questionResponse.data;
	});

	const questions = await Promise.all(questionPromises);

	res.render('quizzes/displayQuiz', { quiz: quiz, questions: questions });
};

export const editQuiz = async (req: Request, res: Response) => {
	const { id } = req.query;

	const response = await axios.get<IQuiz>(
		`${server.schema}://${server.host}:${server.port}/api/quizzes/${id}`,
	);

	const quiz = response.data;

	res.render('quizzes/editQuiz', { quiz: quiz });
};
