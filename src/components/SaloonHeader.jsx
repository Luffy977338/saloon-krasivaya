import React from 'react';

const SaloonHeader = () => {
   return (
      <header className="saloon__header">
         <div className='header'>
            <div className='header__saloon-name'>
               <span>k</span>
               <span>расивая</span>
            </div>
            <div className='header__saloon-navigation'>
               <ul>
                  <li><a href=''>Связь</a></li>
                  <li><a href=''>О нас</a></li>
                  <li><a href=''>Услуги</a></li>
                  <li><a href=''>Персонал</a></li>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default SaloonHeader;
