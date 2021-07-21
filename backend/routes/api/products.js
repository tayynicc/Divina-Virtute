const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 


const { Product, Review, User } = require('../../db/models');





router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.findAll({include:{model:Review}});
    res.json(products)
}))




module.exports = router
