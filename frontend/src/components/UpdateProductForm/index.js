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
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [purchaseLink, setPurchaseLink] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [collectionId, setCollectionId] = useState()
    const [errors, setErrors] = useState({});


    const updateTitle = (e) => {
      setTitle(e.target.value); 
      if(title.length > 5 && title.length < 20){
        let tempErrors = {...errors}
        delete tempErrors.title
        setErrors(tempErrors)
      } 
    }


    const updateimageUrl = (e) => {
        setImageUrl(e.target.value);
        if(tagLine.length > 5 && tagLine.length < 20){
            let tempErrors = {...errors}
            delete tempErrors.tagLine
            setErrors(tempErrors)
        }
    }


    const updatedescription = (e) => {
        setDescription(e.target.value);
        if(description.length > 0){
            let tempErrors = {...errors}
            delete tempErrors.description
            setErrors(tempErrors)
        }
    }


    const updatePrice = (e) => {
        setPrice(e.target.value);
        if(price.length < 0){
            let tempErrors = {...errors}
            delete tempErrors.price
            setErrors(tempErrors)
        }
    }

    const updatePurchaseLink = (e) => {
        setPurchaseLink(e.target.value);
        if(purchaseLink.length < 0){
            let tempErrors = {...errors}
            delete tempErrors.purchaseLink
            setErrors(tempErrors)
        }
    }
    const updateTagLine = (e) => {
        setTagLine(e.target.value)
        if(price.length < 0){
            let tempErrors = {...errors}
            delete tempErrors.price
            setErrors(tempErrors)
        }
    }
    const updateCollectionId = (e) => {
        setCollectionId(e.target.value)
        if(price.length < 0){
            let tempErrors = {...errors}
            delete tempErrors.price
            setErrors(tempErrors)
        }

    }

    
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          setErrors({})

         
          
          if(title.length < 5 || title.length > 20){
              setErrors({...errors, title:'Tile must be between 5 and 20 characters' })
          } if(tagLine.length < 5 || tagLine.length > 20 ){
              setErrors({...errors, tagLine:'Tagline must be between 5 and 20 characters' }) 
          } if(!imageUrl.length){
            setErrors({...errors, imageUrl:'Please provide a valid image url' })
          }if(description.length === 0 ){
                setErrors({...errors, description:'Please provide a product description' })
          } if(!price.length){
                setErrors({...errors, price: 'Price must be a Numeric value, do not include "$" '})
          } if(!purchaseLink.length){
                setErrors({...errors, purchaseLink: 'Please provide valid purchase link '})
          }if(!collectionId){
                setErrors({...errors, collectionId: 'Please make a collection selection' })
             
          }  
    
          
      
          
         
          
          
      
          const tags = ["Unique Shape", "Raw", "Kits", "Tumbled Stones", "Holiday", "Jewlrey", "Point", "Geode", "Worry Stones", "Opal", "Slice" ]

          const payload = {
          id:+id,
          ownerId:sessionUser.id,
          title,
          tagLine,
          imageUrl,
          description,
          price,
          purchaseLink,
          collectionId: +collectionId,
          collectionTag: tags[+collectionId -1]
        };
        
        console.log(!errors)
        console.log(errors)
        console.log(`title`, title.length)
        console.log(typeof price)
       

        if(!Object.keys(errors).length){
          const product = await dispatch(updateProduct(payload))
            if (product) {
                history.push(`/products/${product.id}`);
            }  
        }
        
      };

    

      useEffect(() => {
        dispatch(getOneProduct(id));
      }, [dispatch, id])

    return (
        <div>
        <div className='outer__div'>
          <NavLink to={`/profile/${sessionUser.id}`} className='back__button-home'>
              <img className='back__button' alt='back button' src="https://img.icons8.com/plumpy/24/000000/back--v1.png"/>
          </NavLink>
          <h1 className='form__label'>Update Your Listing</h1>
          
          <div className='edit__form-div'>
            <form onSubmit={handleSubmit}>
                {/* <label className='updateForm__label'>ownerId</label>
                <input type='text'value={ownerId}onChange={updateOwnerId} ></input> */}
        
                <label className='updateForm__label'>Title</label>
                { errors.title !== undefined && (<ul className='error__messages'>{errors.title}</ul>)}
                <input type='text' value={title} onChange={updateTitle} placeholder='Descriptive Title'></input>

                <label className='updateForm__label'>Tag Line</label>
                { errors.tagLine !== undefined && (<ul className='error__messages'>{errors.tagLine}</ul>)}
                <input type='text' value={tagLine} onChange={updateTagLine} placeholder='Grab some attention!'></input>
                
                <label className='updateForm__label'>Image Url</label>
                { errors.imageUrl !== undefined && (<ul className='error__messages'>{errors.imageUrl}</ul>)}
                <input type='text' value={imageUrl} onChange={updateimageUrl} placeholder='Image Link'></input>

                <label className='updateForm__label'>Description</label>
                { errors.description !== undefined && (<ul className='error__messages'>{errors.description}</ul>)}
                <input type='text' value={description} onChange={updatedescription} placeholder='Tell Us What You Got!'></input>

                <label className='updateForm__label'>Price</label>
                { errors.price !== undefined && (<ul className='error__messages'>{errors.price}</ul>)}
                <input type='text' value={price} onChange={updatePrice} placeholder='Price'></input>

                <label className='updateForm__label'>Purchase Link</label>
                { errors.purchaseLink !== undefined && (<ul className='error__messages'>{errors.purchaseLink} </ul>)}
                <input type='text' value={purchaseLink} onChange={updatePurchaseLink} placeholder='Link to your other listings'></input>

                <label className='addPd__label' > Collection Tag </label>
                { errors.collectionId !== undefined && (<ul className='error__messages'>{errors.collectionId}</ul>)}
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
                            <img alt='product views' className='product__image'src={product.imageUrl}></img>
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
