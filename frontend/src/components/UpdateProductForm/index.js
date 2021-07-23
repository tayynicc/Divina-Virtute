import './UpdateProductForm.css'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateProduct } from '../../store/products'
import { useParams } from 'react-router';



function UpdateProductForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    // const product = useSelector(state => state.product[productId])
  //   const products = useSelector((state) => Object.values(state.product))
// const products = useSelector((state) => Object.values(state.product))
  const { id } = useParams()
  
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
          id:+id,
          ownerId,
          title,
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



    return (
        <div>
        <h1>UpdateProductForm</h1>
        <form onSubmit={handleSubmit}>
            <label>ownerId</label>
            <input value={ownerId}onChange={updateOwnerId}></input>

            <label>title</label>
            <input value={title} onChange={updateTitle}></input>
            
            <label>imageUrl</label>
            <input value={imageUrl} onChange={updateimageUrl}></input>

            <label>discription</label>
            <input value={discription} onChange={updatediscription}></input>

            <label>price</label>
            <input value={price} onChange={updatePrice}></input>

            <label>purchaseLink</label>
            <input value={purchaseLink} onChange={updatePurchaseLink}></input>
            
            <button type="submit">Add New Product</button>
        </form>
    </div>
    )
}


export default UpdateProductForm
