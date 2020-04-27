"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeMiddleware = (req, res, id, next) => {
    console.log(req.body);
    return next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJtaWRkbGV3YXJlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQW1CLEVBQUMsR0FBb0IsRUFBQyxFQUFNLEVBQUMsSUFBeUIsRUFBRSxFQUFFO0lBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JCLE9BQU8sSUFBSSxFQUFFLENBQUE7QUFDakIsQ0FBQyxDQUFBIn0=