import React from 'react';
import '../reset.css';
import '../Main.css';
import Slider from '../components/Slider';
import ServiceSelection from '../components/ServiceSelection';

const Main = () => {

   return (
      <main className='main'>
         <Slider />
         <ServiceSelection />
      </main>
   );
}

export default Main;
