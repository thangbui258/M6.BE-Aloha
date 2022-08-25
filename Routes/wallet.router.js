let express = require('express'),
    router = express.Router();
let iconController = require('../Controllers/wallet.controller');

router.post('/add',iconController.addWallet);
router.post('/render',iconController.renderWallet);
router.get('',iconController.render);

module.exports = router;