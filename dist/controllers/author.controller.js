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
const AUTHOR = require('../database/mongo/author');
exports.newAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let author = new AUTHOR(req.body);
    author.save().then((err, result) => {
        if (err) {
            return res.status(400).json(err);
        }
        else {
            return res.status(200).json(result);
        }
    });
});
exports.authorToBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAuthorToBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9hdXRob3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFFbkQsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFPLEdBQU8sRUFBRSxHQUFPLEVBQUUsRUFBRTtJQUMzQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQU8sRUFBQyxNQUFVLEVBQUUsRUFBRTtRQUN0QyxJQUFHLEdBQUcsRUFBQztZQUNILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbkM7YUFBSTtZQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDdEM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFDO0FBQ0YsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFPLEdBQU8sRUFBRSxHQUFPLEVBQUUsRUFBRSxrREFBRSxDQUFDLENBQUEsQ0FBQTtBQUN0RCxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsQ0FBTSxHQUFPLEVBQUMsR0FBTyxFQUFFLEVBQUU7QUFFcEQsQ0FBQyxDQUFBLENBQUEifQ==