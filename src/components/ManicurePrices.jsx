import React from 'react';
import PriceBar from './UI/PriceBar/PriceBar';
import Description from './UI/Description/Description';

const ManicurePrices = ({ manicureServicesList, title, setLightLink, moreInformation }) => {
   return (
      <article className='servicesArticle'>
         <h2>{title}</h2>
         <div className='content'>
            {manicureServicesList.map((item) =>
               <PriceBar id={item.id} key={item.id} name={item.name} price={item.price} moreInformation={moreInformation} />
            )}
         </div>
         <Description setLightLink={setLightLink} />
      </article>
   );
}

export default ManicurePrices;
