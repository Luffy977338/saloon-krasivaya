import React from 'react';
import HairPrices from '../components/HairPrices';
import '../reset.css'
import '../Main.css'

const HairPage = ({ setLightLink, moreInformation }) => {

   const hairServicesList = [
      { id: 1, name: 'Стрижка челки', price: '300' },
      { id: 2, name: 'Детская стрижка', price: '600' },
      { id: 3, name: 'Мужская стрижка', price: '700' },
      { id: 4, name: 'Женская стрижка', price: '800' },
      { id: 5, name: 'Подравнивание длины', price: '800' },
      { id: 6, name: 'Укладка волос феном', price: '1 000' },
      { id: 7, name: 'Тонирование волос', price: '2 000' },
      { id: 8, name: 'Осветление волос', price: '2 500' },
      { id: 9, name: 'Окрашивание корней', price: '2 500' },
      { id: 10, name: 'Окрашивание волос в один тон', price: '4 000' },
      { id: 11, name: 'Хим. завивка', price: '6 000' },
      { id: 12, name: 'Нанопластика волос', price: '7 000' },
   ]

   return (
      <main className='servicesPages'>
         <HairPrices moreInformation={moreInformation} setLightLink={setLightLink} hairServicesList={hairServicesList} title={'Стрижки'} />
      </main>
   );
}

export default HairPage;
