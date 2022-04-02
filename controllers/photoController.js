const { Photo, User } = require("../models");

class photoController {
    static getAllPhotos(req, res) {
        Photo.findAll({
                include: User,
            })
            .then((result) => res.status(200).json(result))
            .catch((err) => console.log(err));
    }

    static getPhotosByIdUser(req, res) {
        const id = req.params.id;
        User.findOne({
                where: { id: id },
                include: {
                    model: Photo,
                },
            })
            .then((result) => res.status(200).json(result))
            .catch((err) => console.log(err));
    }

    static getPhotosById(req, res) {
        let id = +req.params.id;
        Photo.findByPk(id)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static createPhoto(req, res) {
        const { title, caption, image_url } = req.body;

        Photo.create({
                title,
                caption,
                image_url,
            })
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static updatePhotoById(req, res) {
        const id = req.params.id;
        const { title, caption, image_url } = req.body;
        let data = {
            title,
            caption,
            image_url,
        };
        Photo.update(data, {
                where: { id },
                returning: true,
            })
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(200).json(err));
    }

    static deletePhotoById(req, res) {
        const id = req.params.id;
        Photo.destroy({
                where: { id },
            })
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(500).json(err));
    }
}

module.exports = photoController;