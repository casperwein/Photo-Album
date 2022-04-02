"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.bulkInsert(
            "Users", [{
                username: "astrijaya",
                email: "astri@gmail.com",
                password: "astri123",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, ], {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};