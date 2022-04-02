const router = require("express").Router();

const photoController = require("../controllers/photoController");
const authentication = require("../middleware/authentication");

router.get("/", photoController.getAllPhotos);
router.get("/:id", photoController.getPhotosById);
router.post("/create", photoController.createPhoto);
router.put("/update/:id", photoController.updatePhotoById);
router.delete("/delete/:id", photoController.deletePhotoById);

router.use(authentication);

router.get("/byUserId/:id", photoController.getPhotosByIdUser);

module.exports = router;