"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Photos", [{
                    title: "foto senja",
                    caption: "senjamu dan senjaku tertelan gelapnya malam. kau dan aku terlelap hingga waktu mentari pagi",
                    image_url: "https://unsplash.com/photos/CMBaVrc_u4A",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "foto kenangan",
                    caption: "senjamu dan senjaku tertelan gelapnya malam. kau dan aku terlelap hingga waktu mentari pagi",
                    image_url: "https://unsplash.com/photos/tUiP8Krgmws",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "foto aku dan kamu",
                    caption: "senjamu dan senjaku tertelan gelapnya malam. kau dan aku terlelap hingga waktu mentari pagi",
                    image_url: "https://unsplash.com/photos/LMcvt8Rew4c",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "we are family",
                    caption: "senjamu dan senjaku tertelan gelapnya malam. kau dan aku terlelap hingga waktu mentari pagi",
                    image_url: "https://unsplash.com/photos/6UyWK8mDcWo",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ], {}
        );
    },

    async down(queryInterface, Sequelize) {},
};