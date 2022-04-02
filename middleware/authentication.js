const User = require("../models").User;
const verifyToken = require("../helpers/jwt").verifyToken;

function authentication(req, res, next) {
    try {
        const token = req.get("token");
        const userDecoded = verifyToken(token);
        User.findOne({
                where: {
                    id: userDecoded.id,
                    email: userDecoded.email,
                },
            })
            .then((user) => {
                if (!user) {
                    return res.status(403).json({
                        name: "Authentication Error",
                        devMessage: `User with id "${userDecoded.id}" not found in database`,
                    });
                }
                res.locals.user = user;
                req.id = user.id;
                return next();
            })
            .catch((err) => {
                return res.send(401).json(err);
            });
    } catch (err) {
        return res.sendStatus(401).json(err);
    }
}

module.exports = authentication;