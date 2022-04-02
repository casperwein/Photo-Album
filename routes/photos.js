const router = require("express").Router();

const photoController = require("../controllers/photoController");
const authentication = require("../middleware/authentication");

router.use(authentication);

router.get("/", photoController.getAllPhotos);
router.get("/:id", photoController.getPhotosById);
router.get("/usersproducts", photoController.getUsersProduct);
router.post("/create", photoController.createPhoto);
router.put("/update/:id", photoController.updatePhotoById);
router.delete("/delete/:id", photoController.deletePhotoById);
router.get("/byUserId/:id", photoController.getPhotosByIdUser);

module.exports = router;