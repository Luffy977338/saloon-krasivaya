import React from 'react';
import PriceBar from '../components/UI/PriceBar/PriceBar';
import '../reset.css'
import '../Main.css'
import ManicurePrices from '../components/ManicurePrices';

const ManicurePage = ({ setLightLink, moreInformation }) => {

   const manicureServicesList = [
      { id: 1, name: 'Покрытие лаком', price: '500' },
      { id: 2, name: 'Маникюр аппаратный', price: '800' },
      { id: 3, name: 'Педикюр', price: '1 500' },
      { id: 4, name: 'Наращивание ногтей', price: '2 500' },
      { id: 5, name: 'Маникюр', price: '700' },
      { id: 6, name: 'Детский маникюр', price: '650' },
      { id: 7, name: 'Маникюр под ключ', price: '2 000' },
   ]

   return (
      <main className='servicesPages'>
         <ManicurePrices moreInformation={moreInformation} manicureServicesList={manicureServicesList} title={'Маникюр'} setLightLink={setLightLink} />
      </main>
   );
}

export default ManicurePage;
