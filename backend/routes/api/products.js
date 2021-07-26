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



// //get all images
// router.get('/home', asyncHandler(async(req, res) => {
//   const images = await Images.findAll({include:{model:Product}});
  
//   return res.json(images)
// }))

// //get all images and products
// router.get('/profile/:id', asyncHandler(async(req, res) => {
//   const images = await Images.findAll({include:{model:Product}});
  
//   return res.json(images)
// }))





// get a single product 
router.get('/:id', asyncHandler(async (req, res) => {
    
    const product = await Product.findOne({ 
      where:{id:req.params.id},
      include:{model: Review}
    });
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

 const currProduct = await Product.findByPk(productId)
 const product = await currProduct.destroy()
  
//   const product = await Product.destroy({ 
//       where: { id: req.params.id },
//     //   include: { model: Images }
    
//     });
  
  return res.json(product);
}));



// getting all products of specific user 

// router.get('/', asyncHandler(async(req, res) => {
//     const id = parseInt(req.params.ownerid)
//     const products = await Product.findAll({ where: { ownerId: id } });
//     let productList = await res.json(products)
//     return productList
// }))


module.exports = router
