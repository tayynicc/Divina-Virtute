import './UpdateProductForm.css'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { updateProduct } from '../../store/products'
import { useParams } from 'react-router';
// import Product from '../Product'
import { getOneProduct } from '../../store/products'



function UpdateProductForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    // const product = useSelector(state => state.product[productId])
  //   const products = useSelector((state) => Object.values(state.product))
    const products = useSelector((state) => Object.values(state.product))
    const sessionUser = useSelector(state => state.session.user);

 
    const { id } = useParams()
   
    const [title, setTitle] = useState('');
    const [ownerId, setOwnerId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [discription, setDiscription] = useState('');
    const [price, setPrice] = useState('');
    const [purchaseLink, setPurchaseLink] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [collectionId, setCollectionId] = useState()



    const updateTitle = (e) => setTitle(e.target.value);
    const updateOwnerId = (e) => setOwnerId(e.target.value);
    const updateimageUrl = (e) => setImageUrl(e.target.value);
    const updatediscription = (e) => setDiscription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updatePurchaseLink = (e) => setPurchaseLink(e.target.value);
    const updateTagLine = (e) => setTagLine(e.target.value)
    const updateCollectionId = (e) => setCollectionId(e.target.value)
  
      const handleSubmit = async (e) => {
          e.preventDefault();
      
          const tags = ["Unique Shape", "Raw", "Kits", "Tumbled Stones", "Holiday", "Jewlrey", "Point", "Geode", "Worry Stones", "Opal", "Slice" ]

          const payload = {
          id:+id,
          ownerId:sessionUser.id,
          title,
          tagLine,
          imageUrl,
          discription,
          price,
          purchaseLink,
          collectionId: +collectionId,
          collectionTag: tags[+collectionId -1]
        };
    
      const product = await dispatch(updateProduct(payload))
        if (product) {
          history.push(`/products/${product.id}`);
        }
      };

      useEffect(() => {
        dispatch(getOneProduct(id));
      }, [dispatch])

    return (
        <div>
        <div className='outer__div'>
          <NavLink to={`/profile/${sessionUser.id}`} className='back__button-home'>
              <img className='back__button' src="https://img.icons8.com/plumpy/24/000000/back--v1.png"/>
          </NavLink>
          <h1 className='form__label'>Update Your Listing</h1>
          
          <div className='edit__form-div'>
            <form onSubmit={handleSubmit}>
                {/* <label className='updateForm__label'>ownerId</label>
                <input type='text'value={ownerId}onChange={updateOwnerId} ></input> */}

                <label className='updateForm__label'>Title</label>
                <input type='text' value={title} onChange={updateTitle} placeHolder='Descriptive Title'></input>

                <label className='updateForm__label'>Tag Line</label>
                <input type='text' value={tagLine} onChange={updateTagLine} placeHolder='Grab some attention!'></input>
                
                <label className='updateForm__label'>Image Url</label>
                <input type='text' value={imageUrl} onChange={updateimageUrl} placeHolder='Image Link'></input>

                <label className='updateForm__label'>Description</label>
                <input type='text' value={discription} onChange={updatediscription} placeHolder='Tell Us What You Got!'></input>

                <label className='updateForm__label'>Price</label>
                <input type='text' value={price} onChange={updatePrice} placeHolder='Price'></input>

                <label className='updateForm__label'>Purchase Link</label>
                <input type='text' value={purchaseLink} onChange={updatePurchaseLink} placeHolder='Link to your other listings'></input>

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
                
                <button type="submit">Update Product</button>
            </form>
          </div>

            <div className='lising__display'> 
              
              <div className='edit__read-div'>
                {products.map((product) => 
                    <div className='pd__display-update'>
                      <h3 className='previous__listing-label'>Previous Listing</h3>
                        <h1 className='product__title'>{product.title}</h1>

                        <div className='product__image-container'>
                            <img className='product__image'src={product.imageUrl}></img>
                        </div>

                        <div className='price__container'>
                            <a className='product__price' href={`${product.purchaseLink}`}>{`$ ${product.price}`}</a>
                        </div>

                        
                        <div className='product__discription-container'>
                            <p className='product__discription'>{product.discription}</p>
                        </div>
                        

                    </div>
                )}

              </div>
          </div>  
        </div>
    </div>
    )
}


export default UpdateProductForm
