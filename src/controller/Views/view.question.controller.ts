import { Request, Response } from 'express';
import axios from 'axios';
import { server } from '../../config/config';
import { IQuestion } from '../../models/Question';

export const allQuestions = async (req: Request, res: Response) => {
	const response = await axios.get<IQuestion[]>(
		`${server.schema}://${server.host}:${server.port}/api/questions`,
	);

	const questions = response.data;

	res.render('questions/allQuestions', { questions: questions });
};

export const newQuestion = async (req: Request, res: Response) => {
	res.render('questions/newQuestion');
};

export const displayQuestion = async (req: Request, res: Response) => {
	const { id } = req.query;

	const response = await axios.get<IQuestion>(
		`${server.schema}://${server.host}:${server.port}/api/questions/${id}`,
	);

	const question = response.data;

	res.render('questions/displayQuestion', { question: question });
};

export const editQuestion = async (req: Request, res: Response) => {
	const { id } = req.query;

	const response = await axios.get<IQuestion>(
		`${server.schema}://${server.host}:${server.port}/api/questions/${id}`,
	);

	const question = response.data;

	res.render('questions/editQuestion', { question: question });
};