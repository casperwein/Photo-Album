const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const data = {
    user: "Carles",
    password: "password",
};

app.get("/", (req, res) => {
    res.send("Selamat Datang di Integrasi JWT Carles");
});

// verivikasi
function verifikasi(req, res, next) {
    const getHeader = req.headers["auth"];
    if (typeof getHeader !== undefined) {
        req.token = getHeader;
        next();
    } else {
        res.status(403);
    }
}

jwt.sign({
        data: data,
    },
    "secret",
    (err, token) => {
        console.log(token);
    }
);

app.get("/data", verifikasi, (req, res) => {
    jwt.verify(req.token, "secret", (err, dataAuth) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

app.listen(4000, () => console.log("server is listening on port 4000"));