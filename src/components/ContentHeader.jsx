import React from 'react';
import hairCut1 from '../images/hairCut1.jpg'
import hairCut2 from '../images/hairCut2.webp'
import hairCut3 from '../images/hairCut3.webp'
import hairCut4 from '../images/hairCut4.webp'
import hairCut5 from "../images/hairCut5.png"
import hairCut6 from '../images/hairCut6.jpg'

const ContentHeader = () => {
   return (
      <header className='saloonMain__header'>
         <div className='saloonMain__header-text'>
            <div>Выбирайте стиль, который подойдет вам</div>
         </div>
         <div className='saloonMain__header-slider'>
            <ul>
               <li><img width='525' height='505' src={hairCut1} alt="" /></li>
               <li><img width='525' height='505' src={hairCut2} alt="" /></li>
               <li><img width='525' height='505' src={hairCut6} alt="" /></li>
               <li><img width='525' height='505' src={hairCut3} alt="" /></li>
               <li><img width='525' height='505' src={hairCut4} alt="" /></li>
               <li><img width='525' height='505' src={hairCut5} alt="" /></li>
               <li><img width='525' height='505' src={hairCut1} alt="" /></li>
               <li><img width='525' height='505' src={hairCut2} alt="" /></li>
               <li><img width='525' height='505' src={hairCut6} alt="" /></li>
               <li><img width='525' height='505' src={hairCut3} alt="" /></li>
               <li><img width='525' height='505' src={hairCut4} alt="" /></li>
               <li><img width='525' height='505' src={hairCut5} alt="" /></li>
            </ul>
         </div>
      </header>
   );
}

export default ContentHeader;
