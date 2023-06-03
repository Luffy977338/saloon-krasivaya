import React from 'react';

const PriceBar = ({ name, price }) => {
   return (
      <div className='content-price'>
         <p>{name}</p>
         <p>{price} ₽</p>
      </div>
   );
}

export default PriceBar;
