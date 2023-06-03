import React from 'react'
import './reset.css'
import './Main.css';
import SaloonHeader from './components/SaloonHeader';
import ContentHeader from './components/ContentHeader';
import PriceBar from './components/PriceBar';
import ContentArticle from './components/ContentArticle';
import SaloonFooter from './components/SaloonFooter';

function App() {
   return (
      <div className='Saloon'>
         <SaloonHeader />
         <main className='saloonMain'>
            <ContentHeader />
            <ContentArticle />
         </main>
         <SaloonFooter />
      </div>
   );
}

export default App;