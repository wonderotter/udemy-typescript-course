"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var styleTag_1 = require("../style/styleTag");
var decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send(styleTag_1.styleTag + "\n  <h1>Not Permitted</h1>\n  <a href=\"/auth/login\" class=\"a_style a_orange\">Login<a/>\n  ");
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send(styleTag_1.styleTag + "    \n        <div>\n          <h1>You are logged in</h1>\n          <a href=\"/auth/logout\" class=\"a_style a_orange\">Logout</a>\n          <a href=\"/protected\" class=\"a_style a_blue\">Mypage</a>\n        </div>\n      ");
        }
        else {
            res.send(styleTag_1.styleTag + "\n        <div>\n          <h1>You are not logged in</h1>\n          <a href=\"/auth/login\" class=\"a_style a_orange\">Login</a>\n          <a href=\"/protected\" class=\"a_style a_blue\">Mypage</a>\n        </div>\n      ");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        if (req.session && req.session.loggedIn && req.session.username) {
            var username = req.session.username;
            res.send("<h1>Welcome to <strong style=\"color:orange\">" + username + "</strong> MyPage</h1>");
        }
        else {
            res.status(500);
            res.send('Server Error');
        }
    };
    __decorate([
        decorators_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        decorators_1.get('/protected'),
        decorators_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        decorators_1.controller('')
    ], RootController);
    return RootController;
}());
