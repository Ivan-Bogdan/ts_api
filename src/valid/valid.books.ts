import * as express from "express";

exports.validateBook = async (req:express.Request, res:express.Response, next:express.NextFunction) => {
	let {name} = req.body
	if(!name){
		return res.status(400).json({"valid err":"name is true"})
	}
	return next()
};
