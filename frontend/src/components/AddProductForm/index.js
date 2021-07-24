import './AddProductForm.css'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProduct } from '../../store/products'
import { NavLink } from 'react-router-dom'

import waterfallImage1 from '../../Images/waterfall-1.png'
import waterfallImage2 from '../../Images/waterfall-2.png'
import waterfallImage3 from '../../Images/waterfall-3.png'
import waterfallImage4 from '../../Images/waterfall-4.png'
import waterfallImage5 from '../../Images/waterfall-5.png'
import waterfallImage6 from '../../Images/waterfall-6.png'

function AddProductForm(){

  const dispatch = useDispatch();
  const history = useHistory();
//   const products = useSelector((state) => Object.values(state.product))

  const [title, setTitle] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [discription, setDiscription] = useState('');
  const [price, setPrice] = useState('');
  const [purchaseLink, setPurchaseLink] = useState('');
  

  const updateTitle = (e) => setTitle(e.target.value);
  const updateOwnerId = (e) => setOwnerId(e.target.value);
  const updateimageUrl = (e) => setImageUrl(e.target.value);
  const updatediscription = (e) => setDiscription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updatePurchaseLink = (e) => setPurchaseLink(e.target.value);



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
        ownerId,
        title,
        imageUrl,
        discription,
        price,
        purchaseLink,
      };
  
    const product = await dispatch(createProduct(payload))
      if (product) {
        history.push(`/products/${product.id}`);
      }
    };

    // const waterfall= [
    //   waterfallImage1,
    //   waterfallImage2,
    //   waterfallImage3,
    //   waterfallImage4,
    //   waterfallImage5

    // ]
  


    return (
      <div>
        <div className='newPd__bkg-layer1'>
        <NavLink to='/home' className='back__button-newP'>
            <img className='back__button-newProduct' src="https://img.icons8.com/plumpy/24/000000/back--v1.png"/>
        </NavLink>
          
          
          
          <div className='newProductForm__label-div'>
                <h1>New Product</h1>
          </div>

          

          <div className='leaf__left'></div>
          
          <div className='form__container'>
              
              
              <form onSubmit={handleSubmit}>
                  <label className='addPd__label'>ID</label>
                  <input type='text'value={ownerId}onChange={updateOwnerId}></input>

                  <label className='addPd__label'>userid</label>
                  <input type='text' value={title} onChange={updateTitle}></input>
                  
                  <label className='addPd__label' >title</label>
                  <input type='text' value={imageUrl} onChange={updateimageUrl}></input>

                  <label className='addPd__label' >imageURL</label>
                  <input type='text' value={discription} onChange={updatediscription}></input>

                  <label className='addPd__label' >discription</label>
                  <input type='text' value={price} onChange={updatePrice}></input>

                  <label className='addPd__label' >price</label>
                  <input type='text' value={purchaseLink} onChange={updatePurchaseLink}></input>
                  
                  <button type="submit" className='addPd__button'>Add New Product</button>
              </form>
          </div>
          
          <div className='leaf__right'></div>

          <div className='waterfall__outter-div roll'>
            <div >
              <img className='waterfall_image start'src={waterfallImage1}></img>
            </div>

            <div >
              <img className='waterfall_image right'src={waterfallImage2}></img>
            </div>

            <div >
              <img className='waterfall_image left'src={waterfallImage3}></img>
            </div>

            <div >
              <img className='waterfall_image right2'src={waterfallImage6}></img>
            </div>

            <div >
              <img className='waterfall_image left2'src={waterfallImage5}></img>
            </div>

            <div >
              <img className='waterfall_image right3'src={waterfallImage4}></img>
            </div>

          </div>
        </div>  
        

        
    </div>
    )
}


export default AddProductForm
