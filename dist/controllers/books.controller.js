"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require('lodash');
const BOOK = require('../database/mongo/book');
exports.BookById = (req, res, next, id) => __awaiter(void 0, void 0, void 0, function* () {
    BOOK.findById(id).exec((err, result) => {
        if (err || !result) {
            return res.status(400).json({
                error: 'Book not found'
            });
        }
        req.query.book = result;
        next();
    });
});
exports.AllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    BOOK.find().exec((err, result) => {
        if (err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    });
});
exports.NewBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let book = new BOOK(req.body);
    book.save().then((err, result) => {
        if (err) {
            return res.status(400).json({ err });
        }
        else {
            return res.status(200).json(result);
        }
    });
});
exports.DeleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.body;
    BOOK.findOneAndDelete({ _id: id }).exec((err, result) => {
        if (err) {
            return res.status(400).json({ err });
        }
        else {
            return res.status(200).json(result);
        }
    });
});
exports.GetBooksPaginate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentPage = req.query.page || 1;
    const perPage = 50;
    var totalItems;
    yield BOOK.find()
        .countDocuments()
        .then((count) => {
        totalItems = count;
        return BOOK.find().skip((currentPage - 1) * perPage).limit(perPage);
    })
        .then((result) => {
        res.status(200).json(result);
    })
        .catch((err) => console.log(err));
});
exports.FindBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { findstr } = req.body;
    BOOK.find({ name: new RegExp(findstr, 'i') }).exec((err, result) => {
        if (err) {
            return res.status(400).json({ err });
        }
        else {
            return res.status(200).json(result);
        }
    });
});
exports.EditBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let book = _.extend(req.query.book, req.body);
    book.save().then((err, result) => {
        if (err) {
            return res.status(400).json({ err });
        }
        else {
            return res.status(200).json(result);
        }
    });
});
exports.CountBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    BOOK.find().count().exec((err, result) => {
        if (err) {
            return res.status(400).json({ err });
        }
        else {
            return res.status(200).json(result);
        }
    });
});
exports.getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(req.query.book);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3MuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2Jvb2tzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFL0MsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFPLEdBQW1CLEVBQUUsR0FBb0IsRUFBRSxJQUF5QixFQUFFLEVBQU0sRUFBRSxFQUFFO0lBQ3pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBTyxFQUFFLE1BQVUsRUFBRSxFQUFFO1FBQzlDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLEtBQUssRUFBRSxnQkFBZ0I7YUFDdkIsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxFQUFFLENBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQSxDQUFDO0FBRUYsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFPLEdBQW1CLEVBQUUsR0FBb0IsRUFBRSxFQUFFO0lBQ3RFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFPLEVBQUUsTUFBVSxFQUFFLEVBQUU7UUFDeEMsSUFBSSxHQUFHLEVBQUU7WUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcs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