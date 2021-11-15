import './Slideshow.css'

import {React, ReactDOM} from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useParams} from 'react-router-dom'
// import { Slide } from 'react-slideshow-image';
// import "react-slideshow-image/dist/styles.css";
import crystal from '../../Images/crystal.jpg'
import crystal2 from '../../Images/crystal-2.jpg'
import crystal3 from '../../Images/crystal-3.jpg'
import crystal4 from '../../Images/crystal-4.jpg'
import crystal5 from '../../Images/crystal-5.jpg'
import crystal6 from '../../Images/crystal-6.jpg'





function Slideshow(){

    const slideImages = [
        'Images/crystal.jpg',
        'Images/crystal-2.jpg',
        'Images/crystal-3.jpg'
    ]
    

    return (
        <>
            <p>slideshow</p>
            
                     
                <div className="slideshow">
                <div className='text-container'>
                    <h1 className='title'> Divia Virtute</h1>
                    <div className='crysimage'></div>
                    <h3 className='slogan'>The one stop shop for crystals and gems. </h3>
                </div>
                    <div className="container">
                            <section className='section'>
                                <img className='img__1 position' src={crystal} alt='crystals' />
                            </section>
                            <section>
                                <img className='img__1 position' src={crystal2} alt='crystals' />

                            </section>
                            <section>
                                <img className='img__1 position' src={crystal3} alt='crystals' /> 
                            </section>  
                            <section>
                                <img className='img__1 position' src={crystal4} alt='crystals' />
                            </section>
                            <section>
                                <img className='img__1 position' src={crystal5} alt='crystals' />
                        
                        </section> 
                    </div>
     
                </div >
       
            
        </>
    )
}        
        {/* // 
        //     <div className='top__coursel fill'>
        //         <div className='img__container slide position'>
        //             <img className='img__1 position' src={crystal} alt='crystals' />
        //             <img className='img__1 position' src={crystal2} alt='crystals' />
        //             <img className='img__1 position' src={crystal3} alt='crystals' /> 
        //             <img className='img__1 position' src={crystal4} alt='crystals' />
        //             <img className='img__1 position' src={crystal5} alt='crystals' />
        //             <img className='img__1 position' src={crystal6} alt='crystals' />
        //         </div>
             */}
        {/* //     </div> */}
        //     {/* <div className='bottom__coursel fill'>
        //         <div className='img__container-bottom slide position'>
                    
        //         </div>
               
        //     </div> */}
                    {/*  */}
        {/* // </div> */}

{/* //         <div>
//         <Slide easing="ease">
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>





// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

// function Slideshow() { */}
{/* //   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div
//             className="slide"
//             key={index}
//             style={{ backgroundColor }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {colors.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(<Slideshow />,
// document.getElementById("App"));

 */}

export default Slideshow; 