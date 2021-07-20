const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 


const { Reviews } = require('../../db/models/reviews')





router.get('', asyncHandler(async(req, res) => {
    const reviews = await Reviews.findAll();
    res.json(reviews)
}))




module.exports = router
