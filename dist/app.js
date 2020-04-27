"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const bookController = require("./controllers/bookController");
const app = express();
exports.app = app;
app.use(bodyParser.json());
app.set("port", 3000);
app.get('/books', bookController.AllBooks);
app.get('/book/:id', bookController.getBook);
app.post('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.post('/book/:id', bookController.updateBook);
app.listen(app.get("port"), () => {
    console.log("app is running on localhost", app.get("port"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQywrREFBK0Q7QUFFL0QsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFnQmIsa0JBQUc7QUFmWixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0FBRXJCLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFHaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUUsRUFBRTtJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVoRSxDQUFDLENBQUMsQ0FBQSJ9