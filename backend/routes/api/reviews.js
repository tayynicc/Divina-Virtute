const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 


const { Product, Review, User } = require('../../db/models');





router.get('/:id', asyncHandler(async(req, res) => {
    const reviews = await Review.findOne({
        where: {productId:req.params.id}
    });
     
    return res.json(reviews)
}))




module.exports = router
