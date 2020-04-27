"use strict";
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const moment = require('moment');
const BooksSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: String,
        default: moment(new Date(Date.now())).format('LLLL')
    },
    author: {
        type: ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('book', BooksSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImRhdGFiYXNlL21vbmdvL2Jvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLElBQUksRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO0tBQ1o7SUFDRCxJQUFJLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ3BEO0lBQ0QsTUFBTSxFQUFFO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxHQUFHLEVBQUUsTUFBTTtLQUNYO0NBQ0QsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyJ9