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
   console.log(sessionUser.id)
    const [title, setTitle] = useState('');
    const [ownerId, setOwnerId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [discription, setDiscription] = useState('');
    const [price, setPrice] = useState('');
    const [purchaseLink, setPurchaseLink] = useState('');
    const [tagLine, setTagLine] = useState('');
  
    const updateTitle = (e) => setTitle(e.target.value);
    const updateOwnerId = (e) => setOwnerId(e.target.value);
    const updateimageUrl = (e) => setImageUrl(e.target.value);
    const updatediscription = (e) => setDiscription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updatePurchaseLink = (e) => setPurchaseLink(e.target.value);
    const updateTagLine = (e) => setTagLine(e.target.value)
  
  
      const handleSubmit = async (e) => {
          e.preventDefault();
      
          const payload = {
          id:+id,
          ownerId:sessionUser.id,
          title,
          tagLine,
          imageUrl,
          discription,
          price,
          purchaseLink,
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
          <div className='edit__form-div'>
            <form onSubmit={handleSubmit}>
                {/* <label className='updateForm__label'>ownerId</label>
                <input type='text'value={ownerId}onChange={updateOwnerId} ></input> */}

                <label className='updateForm__label'>title</label>
                <input type='text' value={title} onChange={updateTitle} ></input>

                <label className='updateForm__label'>Tag Line</label>
                <input type='text' value={tagLine} onChange={updateTagLine} ></input>
                
                <label className='updateForm__label'>imageUrl</label>
                <input type='text' value={imageUrl} onChange={updateimageUrl}></input>

                <label className='updateForm__label'>discription</label>
                <input type='text' value={discription} onChange={updatediscription}></input>

                <label className='updateForm__label'>price</label>
                <input type='text' value={price} onChange={updatePrice}></input>

                <label className='updateForm__label'>purchaseLink</label>
                <input type='text' value={purchaseLink} onChange={updatePurchaseLink}></input>
                
                <button type="submit">Add New Product</button>
            </form>
          </div>

            <div className='lising__display'> 
              <div className='edit__read-div'>
                {products.map((product) => 
                    <div className='pd__display-update'>
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
