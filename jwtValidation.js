const jwt = require("jsonwebtoken");
const db = require("./database").config;
const middleware = {
    validationToken: function(req, res, next) {
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            jwt.verify(bearerToken, db.secret_key, (err, data) => {
                if (err) {
                    res.status(401);
                    res.json({
                        "success": false,
                        "code": 401,
                        "message": "Invalid Token",
                        "data": err
                    });
                } else {
                    next();
                }
            });
        } else {

            res.status(401);
            res.json({
                "success": false,
                "code": 401,
                "message": "you need a token",
                "data": []
            });
        }
    }
}
module.exports = middleware;