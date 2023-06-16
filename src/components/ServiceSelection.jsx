import React from 'react';
import Option from './UI/Option/Option';
import hairPhoto from '../images/hairCut5.jpg'
import manicurePhoto from '../images/manicure4.webp'
import massagePhoto from '../images/massage.jpg'

const ServiceSelection = () => {

   const OptionList = [
      {
         link: '/hairPage',
         img: hairPhoto,
         name: 'Стрижки'
      },
      {
         link: '/manicurePage',
         img: manicurePhoto,
         name: 'Маникюр'
      },
      {
         link: '/massagePage',
         img: massagePhoto,
         name: 'Масаж'
      }
   ]

   return (
      <article className='main__article'>
         {OptionList.map((item) =>
            <Option link={item.link} img={item.img} name={item.name} />
         )}
      </article>
   );
}

export default ServiceSelection;
