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

// router.use(authorization);

router.put("/update/:id", photoController.updatePhotoById);
router.delete("/delete/:id", photoController.deletePhotoById);

module.exports = router;