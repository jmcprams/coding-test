const express = require('express')
const enquiryController = require('../controllers/enquiry.controller')

const router = express.Router()
router.post('/', enquiryController.createEnquiry)

module.exports = router