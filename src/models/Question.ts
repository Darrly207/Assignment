import mongoose, { Schema } from 'mongoose';

export interface IQuestion {
	text: string;
	options: string[];
	keywords: string[];
	correctAnswerIndex: number;
}

const QuestionSchema = new mongoose.Schema({
	text: { type: Schema.Types.String, required: true },
	options: { type: [Schema.Types.String], required: true },
	keywords: { type: [Schema.Types.String], required: true },
	correctAnswerIndex: { type: Schema.Types.Number, required: true },
});

export const Question = mongoose.model('Question', QuestionSchema);
