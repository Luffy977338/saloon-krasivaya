import React from 'react';
import Visit from '../components/Visit';
import Communication from '../components/Communication';
import map1 from '../images/map.png'

const Connection = () => {

   const visitList = [
      {
         id: 1,
         img: map1,
         city: 'Люберцы, Московская обл.',
         street: '3-е почтовое отделение',
         house: '65',
         stage: '1',
         metro: 'Жулебино',
         workTime: '9:00 - 21:00',
         restTime: '14:30 - 15:30',
         number: '+7 926 171 26-07'
      },
   ]

   return (
      <main className='connection'>
         <article>
            <Communication />
            {visitList.map((item) =>
               <Visit
                  key={item.id}
                  img={item.img}
                  city={item.city}
                  street={item.street}
                  house={item.house}
                  stage={item.stage}
                  metro={item.metro}
                  workTime={item.workTime}
                  restTime={item.restTime}
                  number={item.number}
               />
            )}
         </article>
      </main>
   );
}

export default Connection;
