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
        const newReview = await Review.findByPk(review.id,{
            // where: { productId: req.params.id }, 
            include: { model: User }

        
        })
        
        return res.json(newReview)
    })
)


router.delete(
    '/:id', 
    asyncHandler(async function (req, res) {
        const reviewId = parseInt(req.params.id)
        const currReview = await Review.findByPk(reviewId)
        const review = await currReview.destroy()
        return res.json(review)
    })

)



module.exports = router
