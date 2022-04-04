"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Photo);
        }
    }
    User.init({
        username: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "Username telah dipakai, masukan username lain!",
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Username tidak boleh kosong",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "Email telah dipakai, masukan username lain!",
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Email tidak boleh kosong",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Password tidak boleh kosong",
                },
            },
        },
    }, {
        sequelize,
        modelName: "User",
        hooks: {
            beforeCreate: (user, opt) => {
                const hashedPassword = hashPassword(user.password);
                user.password = hashedPassword;
            },
        },
    });
    return User;
};