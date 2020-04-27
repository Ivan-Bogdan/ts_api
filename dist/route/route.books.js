"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { getBook, FindBooks, NewBook, DeleteBook, GetBooksPaginate, AllBooks, EditBook, CountBooks, BookById } = require('../controllers/books.controller');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuYm9va3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyb3V0ZS9yb3V0ZS5ib29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyxNQUFNLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFDVCxPQUFPLEVBQ1AsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLEVBQ1IsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUMvQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDekQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXJELE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0MseUJBQXlCO0FBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRCx1QkFBdUI7QUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsMENBQTBDO0FBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDekMsaUNBQWlDO0FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoRCxvQ0FBb0M7QUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckMsNkJBQTZCO0FBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsOEJBQThCO0FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3pDLGdDQUFnQztBQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVuQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyJ9