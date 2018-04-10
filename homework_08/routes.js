const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const exportedFunctions = require('./controllers/handlers');

router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

router.get("/rockstars", exportedFunctions.get);
router.post("/rockstar", exportedFunctions.post);
router.get("/rockstars/:id", exportedFunctions.getById);
router.put("/rockstars/:id", exportedFunctions.put);
router.delete("/rockstars/:id", exportedFunctions.delete);

module.exports = router;