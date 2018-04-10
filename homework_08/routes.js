const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
const exportedFunctions = require('./controllers/handlers');

router.use(bodyParser.urlencoded({
	extended: true;
}));
router.use(bodyParser.json());

router.get("/musician", exportedFunctions.get);
router.post("/musician", exportedFunctions.post);
router.get("/musician/:id", exportedFunctions.getById);
router.put("/musician/:id", exportedFunctions.put);
router.delete("/musician/:id", exportedFunctions.delete);

module.exports = router;