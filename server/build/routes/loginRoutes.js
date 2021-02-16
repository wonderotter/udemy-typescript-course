"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"em\"/>\n      </div>\n      <div>\n        <label>password</label>\n        <input type=\"password\" name=\"pa\" />\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var email = req.body.email;
    res.send(email.toUpperCase());
});
