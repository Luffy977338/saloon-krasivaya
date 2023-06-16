import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Connection from './pages/Connection';
import About from './pages/About'
import Services from './pages/Services'
import Staff from './pages/Staff';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import HairPage from './pages/HairPage';
import ManicurePage from './pages/ManicurePage';
import MassagePage from './pages/MassagePage';
import MoreInformation from './pages/MoreInformation';

function App() {

   let pathname = useLocation();
   let mainPage = useNavigate()

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [pathname]);

   useEffect(() => {
      mainPage('/main')
   }, [])

   const [lightLink, setLightLink] = useState()


   const [information, setInformation] = useState()

   const moreInformation = (item) => {
      setInformation(item)
   }

   return (
      <div className='Saloon'>
         <Header lightLink={lightLink} setLightLink={setLightLink} />
         <Routes>
            <Route path='/main' element={<Main />} />
            <Route path='/moreInformation' element={<MoreInformation information={information} />} />
            <Route path='/hairPage' element={<HairPage setLightLink={setLightLink} moreInformation={moreInformation} />} />
            <Route path='/manicurePage' element={<ManicurePage setLightLink={setLightLink} moreInformation={moreInformation} />} />
            <Route path='/massagePage' element={<MassagePage setLightLink={setLightLink} moreInformation={moreInformation} />} />
            <Route path='/connection' element={<Connection />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/staff' element={<Staff />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;