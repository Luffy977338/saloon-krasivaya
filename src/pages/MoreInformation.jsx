import React from 'react';

const MoreInformation = ({ information }) => {


   return (
      <div>
         {information.id}
         {information.name}
         {information.price}
      </div>
   );
}

export default MoreInformation;
