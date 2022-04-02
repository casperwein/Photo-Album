const comparePassword = require("../helpers/bcrypt").comparePassword;
const generateToken = require("../helpers/jwt").generateToken;
const { User } = require("../models");

class UserController {
    static getAllUsers(req, res) {
        return User.findAll()
            .then((data) => res.status(200).json({ data }))
            .catch((err) => console.log(err));
    }

    static register(req, res) {
        const { email, password, username } = req.body;
        return User.create({
                email,
                password,
                username,
            })
            .then((result) => {
                const response = {
                    message: "Registration Succes",
                    id: result.id,
                    username: result.username,
                    passwod: result.password,
                };
                res.status(201).json(response);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }

    static login(req, res) {
        const body = req.body;
        const email = body.email;
        const password = body.passwod;
        User.findOne({
                where: {
                    email: email,
                },
            })
            .then((user) => {
                if (!user) {
                    throw {
                        name: "user login error",
                        devMessage: `User with email "${email}" not found `,
                    };
                }
                const isCorrect = comparePassword(password, user.password);
                if (!isCorrect) {
                    throw {
                        name: "User login error",
                        devMessage: `User's password with "${email}" does not match`,
                    };
                }
                let payload = {
                    id: user.id,
                    email: user.email,
                };
                const token = generateToken(payload);
                return res.status(201).json({ token, user });
            })
            .catch((error) => console.log(error));
    }
}

module.exports = UserController;