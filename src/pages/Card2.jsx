import React from 'react'

const Card2 = () => {
  return (
    <div className='card2'>
       <div className='image'>
         <img src="./assets/image1.svg" alt="" />
       </div>
       <div className='info'>
          <div className='btns'>
            <button>20% {" "} off</button>
            <button>Limited time</button>
          </div>
          <h4>Webbuilder 1</h4>
          <p>Computer  Modern clasic with wix support</p>
          <div className='price'>
             <p>$39.96{" "}<span className='original'>$49.96</span> <span className='offer'>(20% Off)</span></p>
          </div>
          <button>view deal</button>
       </div>
    </div>
  )
}

export default Card2
