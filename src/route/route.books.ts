import * as express from "express";
const {
	getBook,
	FindBooks,
	NewBook,
	DeleteBook,
	GetBooksPaginate,
	AllBooks,
	EditBook,
	CountBooks,
	BookById
} = require('../controllers/books.controller');
const { validateBook } = require('../valid/valid.books');
const router = express.Router({ mergeParams: true });

router.get('/get/book/:BookById', getBook);
// getBook - выдать книгу
router.get('/book/paginate/', GetBooksPaginate);
// AllBooks - все книги
router.get('/all/books', AllBooks);
// CountBooks - счетчик сколько книг всего
router.get('/counter/books', CountBooks);
// NewBook - создание новой книги
router.post('/new/book', validateBook, NewBook);
// FindBooks поиск книги по названию
router.post('/find/book', FindBooks);
// EditBook - изменение книги
router.put('/edit/book/:BookById', EditBook);
// DeleteBook - удаление книги
router.delete('/delet/book', DeleteBook);
// BookById - параметры роутинга
router.param('BookById', BookById);

module.exports = router;
