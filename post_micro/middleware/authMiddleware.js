const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === undefined) {
        return res.status(401).json({ message: "UnAuthorized" });
    }

    const token = authHeader.split(" ")[1];

    // verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.status(401).json({ message: "UnAuthorized" });

        req.user = payload;
        next();
    });
};

module.exports = authMiddleware;