import * as express from "express";
exports.JokeMiddleware = (req:express.Request,res:express.Response,id:any,next:express.NextFunction) =>{
    console.log(req.body)
    return next()
}