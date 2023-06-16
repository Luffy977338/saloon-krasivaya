import React from 'react';
import cl from './PriceBar.module.css'
import { Link } from 'react-router-dom';

const PriceBar = ({ name, price, id, moreInformation }) => {


   const serviceInformation = () => {
      const selectedService = { id, name, price }
      moreInformation(selectedService)
   }

   return (
      <Link onClick={serviceInformation} to='/moreInformation' className={cl.content__bar} >
         <div className={cl.content__bar_name}>{name}</div>
         <div className={cl.content__bar_price}>{price} ₽</div>
      </Link>
   );
}

export default PriceBar;
