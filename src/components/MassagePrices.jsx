import React from 'react';
import PriceBar from './UI/PriceBar/PriceBar';
import Description from './UI/Description/Description';

const MassagePrices = ({ massageServicesList, title, setLightLink, moreInformation }) => {
   return (
      <article className='servicesArticle'>
         <h2>{title}</h2>
         <div className='content'>
            {massageServicesList.map((item) =>
               <PriceBar moreInformation={moreInformation} id={item.id} key={item.id} name={item.name} price={item.price} />
            )}
         </div>
         <Description setLightLink={setLightLink} />
      </article>
   );
}

export default MassagePrices;
