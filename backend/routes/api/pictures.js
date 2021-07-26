

const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 



const { Product, Review, User, Images } = require('../../db/models');
















//get all images
router.get('', asyncHandler(async(req, res) => {
    const images = await Images.findAll({include:{model:Product}});
    
    return res.json(images)
  }))