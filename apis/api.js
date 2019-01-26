const express = require('express')
const router = express.Router()

router.use('/image', require('./image/image'))
router.use('/food', require('./food/food'))

module.exports = router;