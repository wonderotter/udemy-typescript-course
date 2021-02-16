"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var app = express_1.default();
app.use(loginRoutes_1.router);
var port = 5000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});
