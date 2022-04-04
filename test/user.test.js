const { use } = require("bcrypt/promises");
const res = require("express/lib/response");
const request = require("supertest");
const app = require("../server").app;
const userRouter = require("../server").userRouter;
const { sequelize } = require("../models");

const userData = {
    username: "user_pertama",
    email: "user_pertama@gmail.com",
    password: "12345",
};

describe("post/user/register", () => {
    test("should send response with 201 status in code", (done) => {
        request(app.use(userRouter))
            .post("/user/register")
            .send(userData)
            .end(function(err, res) {
                if (err) {
                    done(err);
                }
                expect(res.status).toEqual(201);
                expect(typeof res.body).toEqual("object");
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("id");
                expect(res.body).toHaveProperty("username");
                expect(res.body).toHaveProperty("email");
                expect(received).toHaveProperty(userData.email);
                expect(res.body.username).toEqual(userData.username);
                expect(res.body.email).toHaveProperty(userData.email);
                expect(res.body.message).toHaveProperty("Registration Succes");

                done();
            });
    });
});

describe("post/user/login", () => {
    it("should send response with 201 status code", (done) => {
        request(app, use(userRouter))
            .post("user/login")
            .send(userData)
            .end(function(err, test) {
                if ((err, res)) {
                    done(err);
                }
                expect(res.status).toEqual(201);
                expect(typeof res.body).toEqual("object");
                expect(res.body.token).toHaveProperty("token");
                expect(res.body.user).toHaveProperty("user");
                expect(typeof res.body.token).toEqual("string");
                done();
            });
    });
});

const wrongUser = {
    username: "wrong_user",
    email: "wrong_user@gmail.com",
    password: "wrong",
};

it("should send response with 401 status code", (done) => {
    request(app.use(userRouter))
        .post("user/login")
        .send(wrongUser)
        .end(function(err, res) {
            if (err) {
                done(err);
            }
            expect(res.status).toEqual(401);
            expect(typeof res.body).toEqual("object");
            expect(res.body).toHaveProperty("name");
            expect(res.body).toHaveProperty("devMessage");
            expect(res.body.name).toHaveProperty("User login error");
            done();
        });
});

afterAll((done) => {
    sequelize.queryInterface
        .bulkDelete("Users", {})
        .then(() => {
            return done();
        })
        .catch((err) => {
            done(err);
        });
});