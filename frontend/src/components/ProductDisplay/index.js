import './ProductDisplay.css'





function ProductDisplay(){

    return(
        <div className='product__display'>
            <div className='pd__mockup'>
                <div className='pd__image'></div>
                <div className='pd__name'>
                    <a href='/product'>Opalite Moon Crystal Healing Stone</a>
                </div>
                <div className='pd__tagLine'>
                    <p>Sizes and shapes differ slightly, sizes range from 30 - 35 mm. Surface is bumpy on both sides and moon is puffy so its's thicker in the center and thinner towards the edges.</p>
                </div>
                <div className='pd__commentNum'></div>
                <div className='pd__tag'>
                    <h5>Moon</h5>
                </div>
                <div className='pd__voteCount'></div>
            </div>
        </div> 
        
    )
}




























export default ProductDisplay
