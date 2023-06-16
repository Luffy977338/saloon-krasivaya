import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Option.module.css'

const Option = (props) => {
   return (
      <Link to={props.link} className={cl.service}>
         <div className={cl.service__bar}>
            <img width='700px' height='400px' src={props.img} alt="" className={cl.service__icon} />
            <div className={cl.service__option}>
               {props.name}
            </div>
         </div>
      </Link>
   );
}

export default Option;
