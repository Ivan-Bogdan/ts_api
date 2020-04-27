import * as express from "express";

const _ = require('lodash');
const BOOK = require('../database/mongo/book');

exports.BookById = async (req:express.Request, res:express.Response, next:express.NextFunction, id:any) => {
	BOOK.findById(id).exec((err:any, result:any) => {
		if (err || !result) {
			return res.status(400).json({
				error: 'Book not found'
			});
		}
		req.query.book = result;
		next();
	});
};

exports.AllBooks = async (req:express.Request, res:express.Response) => {
	BOOK.find().exec((err:any, result:any) => {
		if (err) {
			return res.status(400).json(err);
		}
		return res.status(200).json(result);
	});
};
exports.NewBook = async (req:express.Request, res:express.Response) => {
	let book = new BOOK(req.body);
	book.save().then((err:any, result:any) => {
		if (err) {
			return res.status(400).json({ err });
		} else {
			return res.status(200).json(result);
		}
	});
};
exports.DeleteBook = async (req:express.Request, res:express.Response) => {
	let { id } = req.body;
	BOOK.findOneAndDelete({ _id: id }).exec((err:any, result:any) => {
		if (err) {
			return res.status(400).json({ err });
		} else {
			return res.status(200).json(result);
		}
	});
};
exports.GetBooksPaginate = async (req:express.Request, res:express.Response) => {
	const currentPage = req.query.page || 1;
	const perPage = 50;
	var totalItems;

	await BOOK.find()
		.countDocuments()
		.then((count:number) => {
			totalItems = count;
			return BOOK.find().skip((currentPage - 1) * perPage).limit(perPage);
		})
		.then((result:any) => {
			res.status(200).json(result);
		})
		.catch((err:any) => console.log(err));
};
exports.FindBooks = async (req:express.Request, res:express.Response) => {
	let { findstr } = req.body;
	BOOK.find({ name: new RegExp(findstr, 'i') }).exec((err:any, result:any) => {
		if (err) {
			return res.status(400).json({err});
		} else {
			return res.status(200).json(result);
		}
	});
};
exports.EditBook = async (req:express.Request, res:express.Response) => {
	let book = _.extend(req.query.book, req.body);
	book.save().then((err:any, result:any) => {
		if (err) {
			return res.status(400).json({ err });
		} else {
			return res.status(200).json(result);
		}
	});
};
exports.CountBooks = async (req:express.Request, res:express.Response) => {
	BOOK.find().count().exec((err:any, result:any) => {
		if (err) {
			return res.status(400).json({ err });
		} else {
			return res.status(200).json(result);
		}
	});
};
exports.getBook = async (req:express.Request, res:express.Response) => {
	return res.status(200).json(req.query.book);
};
