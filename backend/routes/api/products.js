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



// edit / update a product 
router.put(
    '/:id',
    asyncHandler(async function (req, res) {
        const productId = parseInt(req.params.id)
        const singleProduct = await Product.findByPk(productId);
        const updatedProduct = await singleProduct.update(req.body)

      return res.json(updatedProduct);
    })
  );




// Delete a post

router.delete("/:id", asyncHandler(async function (req, res) {
  const productId = parseInt(req.params.id)
  
  const product = await Product.destroy({ where: { id: productId } });
  
  return res.json(product);
}));


module.exports = router
