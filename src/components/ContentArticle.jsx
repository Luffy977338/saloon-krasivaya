import React from 'react';
import PriceBar from './PriceBar';

const ContentArticle = () => {
   return (
      <article className='article'>
         <h2>Услуги и цены</h2>
         <div className='content'>
            <PriceBar
               name={'Детская стрижка'}
               price={'700'}
            />
            <PriceBar
               name={'Мужская стрижка'}
               price={'1 500'}
            />
            <PriceBar
               name={'Женская стрижка'}
               price={'1 700'}
            />
            <PriceBar
               name={'Окрашивание'}
               price={'2 600'}
            />
         </div>
         <div className='description'>
            <span>Больше информации</span>
            <p>
               о нас, стрижках и услугах можно узнать <a href=''>связавшись с нам.</a><br />Если вам надо найти нас на картах, <a href='https://www.google.com/maps/place/%D1%83%D0%BB.+3-%D0%B5+%D0%9F%D0%BE%D1%87%D1%82%D0%BE%D0%B2%D0%BE%D0%B5+%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5,+65,+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+109156/@55.6830872,37.8651678,20.5z/data=!4m6!3m5!1s0x414ab6138fdcac3f:0xcf95ec7fa8eb5a97!8m2!3d55.6831076!4d37.8649938!16s%2Fg%2F11sgzzd8z6?entry=ttu' target='_blank'>кликните сюда.</a><br />Становитесь красивее с нами
            </p>
         </div>
      </article>
   );
}

export default ContentArticle;
