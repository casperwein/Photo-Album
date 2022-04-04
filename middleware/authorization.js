const { Photo } = require("../models");

function authorization(req, res, next) {
    const photoId = req.params.id;
    const authorizationUser = req.user;

    Photo.findOne({
            where: {
                photoId,
            },
        })
        .then((photo) => {
            if (!photo) {
                return res.status(400).json({
                    name: "data not found",
                    devMessage: `photo with id "${photoId}" not found `,
                });
            }

            if (photo.userId === authorizationUser.id) {
                return next();
            } else {
                return res.status(404).json({
                    name: "authorization error",
                    devMessage: `User with  id ${authorizationUser.id} does not have permission to acces Photo with id ${photo.id}`,
                });
            }
        })
        .catch((err) => {
            return res.status("500").json(err);
        });
}

module.exports = authorization;