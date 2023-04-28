var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var flower_controller = require('../controllers/flower');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// flower ROUTES ///
// POST request for creating a flower.
router.post('/flower', flower_controller.flower_create_post);
// DELETE request to delete flower.
router.delete('/flower/:id', flower_controller.flower_delete);
// PUT request to update Reacher.
router.put('/flower/:id', flower_controller.flower_update_put);
// GET request for one flower.
router.get('/flower/:id', flower_controller.flower_detail);
// GET request for list of all flower items.
router.get('/flower', flower_controller.flower_list);
module.exports = router;

