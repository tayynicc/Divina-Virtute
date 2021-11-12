import Headers from "../Headers"

import './GuideStone.css'

function GuideStone(){
    


    return (
        <>
        <Headers /> 

        <div className='tableOfContents'>
            <div className='menu__name'>

            </div>
        
        </div>

        <div className='itemInformation__container'>
            <div className='item__image-container'>

            </div>
            <div className='item__name'>
                <h1>Name</h1>
            </div>

            <div className='item__elements'>
                <h3> elements </h3>
            </div>

            <div className='item__origin'>
                <h4>Origin</h4>
            </div>

            <div className='item__description'>
                <p>discription</p>
            </div>

            <div className='item__specialInstructions'>
                <p>special instructions</p>
            </div>

        </div>

        </>
    )
}


export default GuideStone
