const jwt = require("jsonwebtoken");
const secretKey = "secret";

function generateToken(payload) {
    const token = jwt.sign(payload, secretKey);
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
}

module.exports = { generateToken, verifyToken };