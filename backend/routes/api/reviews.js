const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 


const { Product, Review, User } = require('../../db/models');





router.get('/:id', asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({
        where: {productId:req.params.id},
        include: { model: User}
    });
     
    return res.json(reviews)
}))


// create a new comment --> create

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const review = await Review.create(req.body);
        
        return res.json(review)
    })
)



module.exports = router
