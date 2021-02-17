"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" autocomplete=\"username\"/>\n      </div>\n      <div>\n        <label>password</label>\n        <input type=\"password\" name=\"password\" autocomplete=\"current-password\"/>\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        // mark this person as logged in
        req.session = { loggedIn: true };
        //redirect them to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <p>You are logged in</p>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <p>You are not logged in</p>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
