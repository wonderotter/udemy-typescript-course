"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("\n  <h1>Not Permitted</h1>\n  <a href=\"/login\">Login<a/>\n  ");
}
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" autocomplete=\"username\"/>\n      </div>\n      <div>\n        <label>password</label>\n        <input type=\"password\" name=\"password\" autocomplete=\"current-password\"/>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  ");
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <p>You are logged in</p>\n        <a href=\"/logout\">Logout</a>\n        <a href=\"/protected\">Mypage</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <p>You are not logged in</p>\n        <a href=\"/login\">Login</a>\n        <a href=\"/protected\">Mypage</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    if (req.session && req.session.loggedIn && req.session.username) {
        var username = req.session.username;
        res.send("Welcome to " + username + " MyPage");
    }
    else {
        res.status(500);
        res.send('Server Error');
    }
});
