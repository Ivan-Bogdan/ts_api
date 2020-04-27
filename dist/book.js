"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/books";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
const Book = mongoose.model('Book', exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFFckMsTUFBTSxHQUFHLEdBQVcsaUNBQWlDLENBQUM7QUFFdEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBTyxFQUFDLEVBQUU7SUFDbEYsSUFBRyxHQUFHLEVBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtTQUFJO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0tBQ3RDO0FBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFVyxRQUFBLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDM0MsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ25DLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQztDQUN0QyxDQUFDLENBQUE7QUFDRixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDaEQsa0JBQWUsSUFBSSxDQUFDIn0=