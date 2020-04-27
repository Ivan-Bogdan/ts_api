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
exports.validateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({ "valid err": "name is true" });
    }
    return next();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuYm9va3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJ2YWxpZC92YWxpZC5ib29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBTyxHQUFtQixFQUFFLEdBQW9CLEVBQUUsSUFBeUIsRUFBRSxFQUFFO0lBQ3JHLElBQUksRUFBQyxJQUFJLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBQ3JCLElBQUcsQ0FBQyxJQUFJLEVBQUM7UUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsV0FBVyxFQUFDLGNBQWMsRUFBQyxDQUFDLENBQUE7S0FDekQ7SUFDRCxPQUFPLElBQUksRUFBRSxDQUFBO0FBQ2QsQ0FBQyxDQUFBLENBQUMifQ==