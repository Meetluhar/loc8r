var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');

const ctrlOthers = require('../controllers/others');

/* GET Location page. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* GET About page. */
router.get('/about', ctrlOthers.about);


module.exports = router;