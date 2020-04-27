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
