const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 


const { Product, Review, User, Image } = require('../../db/models');


// router.get('/', asyncHandler(async(req, res) => {
//     const images = await Image.findAll();
    
//     return res.json(images)
// }))


// router.get('/', asyncHandler(async(req, res) => {
//     const images = await Image.findAll({include:{model:Products}});
//     let imageList = await res.json(images)
//     return imageList
// }))


//get all images
router.get('/', asyncHandler(async(req, res) => {
    const images = await Images.findAll({include:{model:Product}});
    
    return res.json(images)
  }))


module.exports = router