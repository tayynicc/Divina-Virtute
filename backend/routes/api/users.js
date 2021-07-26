// backend/routes/api/session.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Product, Images} = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
// const { default: UsersProducts } = require('../../../frontend/src/components/UsersProducts');


const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];


  
// get 
router.get('/', asyncHandler(async(req, res) => {
    const users = await User.findAll();
    res.json(users)
}))



// get a single user AND that users Products 
router.get('/:id', asyncHandler(async (req, res) => {

    // const userId = parseInt(req.params.id)
    // const user = await User.findByPk(userId);
    // const userProducts = await User.findAll({
    //     where: { id: userId },
    //     include:{model:Product}
    // });

    const userProducts = await User.findOne({
        where: {id:req.params.id},
        include:{model:Product}
    })
    

    return res.json(userProducts);
}));





// Sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );


module.exports = router
