import React from 'react';
import hairCut1 from '../images/hairCut1.jpg'
import hairCut2 from '../images/hairCut2.jpg'
import hairCut3 from '../images/hairCut3.webp'
import hairCut4 from '../images/hairCut4.png'
import hairCut5 from "../images/hairCut5.jpg"
import hairCut6 from '../images/hairCut6.jpg'
import hairCut7 from '../images/hairCut4.webp'
import manicure1 from '../images/manicure1.jpg'
import manicure2 from '../images/manicure2.jpg'
import manicure3 from '../images/manicure3.jpg'


const ContentHeader = () => {
   return (
      <header className='main__header'>
         <div className='main__header-text'>
            <div>Выбирайте стиль, который подойдет вам</div>
         </div>
         <div className='main__header-slider'>
            <ul>
               <li><img width='525' height='505' src={hairCut4} alt="" /></li>
               <li><img width='525' height='505' src={manicure1} alt="" /></li>
               <li><img width='525' height='505' src={hairCut5} alt="" /></li>
               <li><img width='525' height='505' src={manicure2} alt="" /></li>
               <li><img width='525' height='505' src={hairCut2} alt="" /></li>
               <li><img width='525' height='505' src={manicure3} alt="" /></li>
               <li><img width='525' height='505' src={hairCut4} alt="" /></li>
               <li><img width='525' height='505' src={manicure1} alt="" /></li>
               <li><img width='525' height='505' src={hairCut5} alt="" /></li>
               <li><img width='525' height='505' src={manicure2} alt="" /></li>
               <li><img width='525' height='505' src={hairCut2} alt="" /></li>
               <li><img width='525' height='505' src={manicure3} alt="" /></li>
            </ul>
         </div>
      </header>
   );
}

export default ContentHeader;
