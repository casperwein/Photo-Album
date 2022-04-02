"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Photos", [{
                title: "Foto pertama milik User ID 1",
                caption: "INI Foto pertama milik User ID 1",
                image_url: "https://unsplash.com/photos/CMBaVrc_u4A",
                UserId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Foto Kedua milik User ID 1",
                caption: "INI Foto Kedua milik User ID 1",
                image_url: "https://unsplash.com/photos/CMBaVrc_u4A",
                UserId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Foto ketiga milik User ID 1",
                caption: "INI Foto ketiga milik User ID 1",
                image_url: "https://unsplash.com/photos/CMBaVrc_u4A",
                UserId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
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