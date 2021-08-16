import './CollectionsLanding.css'
import Headers from '../Headers'
import { NavLink } from 'react-router-dom'
import {getProducts} from '../../store/products'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'


// design layout 


function CollectionsLanding(){

    // const { id } = useParams()


    const dispatch = useDispatch();
    const products = useSelector((state) => Object.values(state.product))


    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    function uniqueTags(){
        let tags = products.map((product) => product.collectionTag)
        let unique = new Set(tags)
        return [...unique]
    }

    function uniqueTagImages(){
        const ids = [1, 2, 3, 4, 8, 9, 12, 13, 16, 17]
        let images = products.filter((product) => ids.includes(product.id))
        return images
    }

    const tags = uniqueTags()

    const images = uniqueTagImages()
    

    console.log(`tags`, tags, `images`, images)

    return(
        <div className='collectionsLanding__bkg-layer1'>
            <div>
                <Headers />
            </div>

            <div className='collections__container'>

                {/* these cards will be mapped */}
                
                
                {tags.map((tag, idx) => 
                    <div className='collection__card'>
                        <div className='collection__title'>{tag}</div>
                     <a href={`/collection/${images[idx]?.collectionId}`}><img className='collection__image' src={images[idx]?.imageUrl}></img></a>

                    {console.log(`image ids `, images[idx].collectionId)}
                    
                
                        

                    </div>
                )}

                

                {/* <div className='collection__card'>
                    {/* make it so when the card is clicked in any place it will nav to a page displaying the products in that collection, attempted with nav link likely dowith a and put img tag inside */}
                        {/* <div className='collection__title'> Title </div>
                        <div className='collection__image'>
                            <NavLink to='/collection/1'>
                                
                                select colleciton
                            </NavLink>
                        </div>
                    
                    
                    
                </div>  */}

            </div>


            





        </div>     
    )

}


export default CollectionsLanding
