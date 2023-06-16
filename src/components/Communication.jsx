import React from 'react';
import vk from '../images/vk.svg'
import telegram from '../images/telegram.svg'

const Communication = () => {
   return (
      <div className='communication'>
         <div className='communication__methods'>
            <p>Свяжитесь с нами</p>
         </div>
         <div className='communication__communities'>
            <div className='communication__communities-vk'>
               <a href="">Вконтакте</a>
               <img width={50} height={50} src={vk} alt="" />
            </div>
            <div className='communication__communities-telegram'>
               <a href="">Телеграм</a>
               <img width={50} height={50} src={telegram} alt="" />
            </div>
         </div>
      </div>
   );
}

export default Communication;
