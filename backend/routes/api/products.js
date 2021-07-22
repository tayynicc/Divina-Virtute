const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler'); 



const { Product, Review, User } = require('../../db/models');




// getting all products
router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.findAll({include:{model:Review}});
    let productList = await res.json(products)
    return productList
}))

// get a single product 
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    return res.json(product);
}));


// create a new product 
router.post(
    '/',
    asyncHandler(async function (req, res) {
      const product = await Product.create(req.body);
      res.json(product)
      return res.redirect(`/products/${product.id}`);
    })
  );



// edit a product 
router.put(
    '/:id',
    asyncHandler(async function (req, res) {
      const id = await Product.update(req.body);

      console.log(id)
    //   const product = await Product.one(id);
      return res.json(pokemon);
    })
  );
module.exports = router
