import './AddProductForm.css'

import { useState } from 'react';
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




  
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [discription, setDiscription] = useState('');
  const [price, setPrice] = useState('');
  const [purchaseLink, setPurchaseLink] = useState('');
  const [tagLine, setTagLine] = useState('')
  const [collectionId, setCollectionId] = useState()
  

  const updateTitle = (e) => setTitle(e.target.value);
  const updateimageUrl = (e) => setImageUrl(e.target.value);
  const updatediscription = (e) => setDiscription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updatePurchaseLink = (e) => setPurchaseLink(e.target.value);
  const updateTagLine = (e) => setTagLine(e.target.value)
  const updateCollectionId = (e) => setCollectionId(e.target.value)


  const sessionUser = useSelector(state => state.session.user);

 


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const tags = ["Unique Shape", "Raw", "Kits", "Tumbled Stones", "Holiday", "Jewlrey", "Point", "Geode", "Worry Stones", "Opal", "Slice" ]
        
        const payload = {
        ownerId: sessionUser.id,
        title,
        tagLine,
        imageUrl,
        discription,
        price,
        purchaseLink,
        collectionId: +collectionId,
        collectionTag: tags[+collectionId -1]
      };
  
    const product = await dispatch(createProduct(payload))
      if (product) {
        history.push(`/products/${product.id}`);
      }
    };

  
    return (
      <div>
        <div className='newPd__bkg-layer1'>
        <NavLink to='/home' className='back__button-newP'>
            <img className='back__button-newProduct' alt='new product tool' src="https://img.icons8.com/plumpy/24/000000/back--v1.png"/>
        </NavLink>
          
          
          
          <div className='newProductForm__label-div'>
                <h1>New Product</h1>
          </div>

          

          <div className='leaf__left'></div>
          
          <div className='form__container'>
              
              
              <form className='addPD__form' onSubmit={handleSubmit}>
                  {/* <label className='addPd__label'>ID</label>
                  <input type='text'value={ownerId}onChange={updateOwnerId}></input> */}

                  <label className='addPd__label'> Title </label>
                  <input type='text' value={title} onChange={updateTitle}></input>
                  
                  <label className='addPd__label'> Tag Line </label>
                  <input type='text' value={tagLine} onChange={updateTagLine}></input>
                  
                  <label className='addPd__label' > Image Url</label>
                  <input type='text' value={imageUrl} onChange={updateimageUrl}></input>

                  
                  <label className='addPd__label' >Description</label>
                  <input type='text' value={discription} onChange={updatediscription}></input>

                  <label className='addPd__label' > Price </label>
                  <input type='text' value={price} onChange={updatePrice}></input>

                  <label className='addPd__label' > Purchase Link </label>
                  <input type='text' value={purchaseLink} onChange={updatePurchaseLink}></input>

                  <label className='addPd__label' > Collection Tag </label>
                  <select className='collectionTag__selector' onChange={updateCollectionId}>
                      <option className='collectionTag__option' value="1" > Unique Shape </option>
                      <option className='collectionTag__option' value='2' > Raw </option>
                      <option className='collectionTag__option' value='3' > Kits </option>
                      <option className='collectionTag__option' value='4' > Tumbled Stones </option>
                      <option className='collectionTag__option' value='5' > Holiday </option>
                      <option className='collectionTag__option' value='6' > Jewlrey </option>
                      <option className='collectionTag__option' value='7' > Point </option>
                      <option className='collectionTag__option' value='8' > Geode </option>
                      <option className='collectionTag__option' value='9' > Worry Stones </option>
                      <option className='collectionTag__option' value='10'> Opal </option>
                      <option className='collectionTag__option' value='11'> Slice </option>

                  </select>
                  
                  <button type="submit" className='addPd__button'>Add New Product</button>
              </form>
          </div>
          
          <div className='leaf__right'></div>

          <div className='waterfall__outter-div roll'>
            <div >
              <img alt='crystal waterfall images' className='waterfall_image start'src={waterfallImage1}></img>
            </div>

            <div >
              <img alt='crystal waterfall images'   className='waterfall_image right'src={waterfallImage2}></img>
            </div>

            <div >
              <img alt='crystal waterfall images'  className='waterfall_image left'src={waterfallImage3}></img>
            </div>

            <div >
              <img alt='crystal waterfall images'  className='waterfall_image right2'src={waterfallImage6}></img>
            </div>

            <div >
              <img alt='crystal waterfall images'  className='waterfall_image left2'src={waterfallImage5}></img>
            </div>

            <div >
              <img alt='crystal waterfall images'  className='waterfall_image right3'src={waterfallImage4}></img>
            </div>

          </div>
        </div>  
        

        
    </div>
    )
}


export default AddProductForm
