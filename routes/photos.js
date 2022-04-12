const router = require("express").Router();

const photoController = require("../controllers/photoController");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.use(authentication);

router.get("/", photoController.getAllPhotos);
router.get("/:id", photoController.getPhotosById);
router.get("/usersproducts", photoController.getUsersProduct);
router.post("/create", photoController.createPhoto);
router.get("/byUserId/:id", photoController.getPhotosByIdUser);

// router.use();

router.put("/update/:id", authorization, photoController.updatePhotoById);
router.delete("/delete/:id", authorization, photoController.deletePhotoById);

module.exports = router;