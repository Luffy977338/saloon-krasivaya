import React from 'react';
import MassagePrices from '../components/MassagePrices';

const Massage = ({ setLightLink, moreInformation }) => {

   const massageServicesList = [
      {
         id: 1,
         name: 'Массаж спины',
         price: '800'
      },
      {
         id: 2,
         name: 'Массаж шеи',
         price: '400'
      },
      {
         id: 3,
         name: 'Массаж бедер',
         price: '500'
      }
   ]

   return (
      <main className='servicesPages'>
         <MassagePrices moreInformation={moreInformation} setLightLink={setLightLink} massageServicesList={massageServicesList} title={'Массаж'} />
      </main>
   );
}

export default Massage;
