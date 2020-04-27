const AuthorSchema = new mongoose.Schema({
	// имя
	name: {
		type: String
	},
	// фамилия
	surname: {
		type: String
	},
	// дата рождения
	Date_of_Birth: {
		type: Date
	},
	// счетчик книг
	CounterBooks: {
		type: Number,
		default: 0
	}
});
module.exports = mongoose.model('author', AuthorSchema);
