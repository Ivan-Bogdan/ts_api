"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZGF0YWJhc2UvbW9uZ28vYXV0aG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEMsTUFBTTtJQUNOLElBQUksRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO0tBQ1o7SUFDRCxVQUFVO0lBQ1YsT0FBTyxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDWjtJQUNELGdCQUFnQjtJQUNoQixhQUFhLEVBQUU7UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNWO0lBQ0QsZUFBZTtJQUNmLFlBQVksRUFBRTtRQUNiLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDVjtDQUNELENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMifQ==