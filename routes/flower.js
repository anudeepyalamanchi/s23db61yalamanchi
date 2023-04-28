var express = require('express');
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
const flower_controlers= require('../controllers/flower');
var router = express.Router();
/* GET flowers */
router.get('/', flower_controlers.flower_view_all_Page );
module.exports = router;

/* GET detail flower page */
router.get('/detail', flower_controlers.flower_view_one_Page);

/* GET create flower page */
router.get('/create', secured, flower_controlers.flower_create_Page);

/* GET create update page */
router.get('/update',secured, flower_controlers.flower_update_Page);

/* GET delete flower page */
router.get('/delete', secured, flower_controlers.flower_delete_Page);
