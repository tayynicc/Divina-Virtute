const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 


const { Product, Review, User, Images } = require('../../db/models');


router.get('/', asyncHandler(async(req, res) => {
    const images = await Images.findAll();
    const imageList = await res.json(images)
    return imageList
}))







module.exports = router