import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Shop from './Shop';
import CPU from './pages/CPU';
import GPU from './pages/GPU';
import Motherboard from './pages/Motherboard';
import Case from './pages/Case';
import RAM from './pages/RAM';
import SSD from './pages/SSD';
import Cart from './Cart';
import Contact from './Contact';
import Apropos from './Apropos'
import Costume from './costume'
import Costume2 from './costume2'
import Costume3 from './costume3'
import Costume4 from './costume4'
import Costume5 from './costume5'
import Costume6 from './costume6'
import Costume7 from './costume7'
import Costume8 from './costume8'

import { Link , Routes, Route } from 'react-router-dom';

import '../styles/App.css'


function App() {
  
    return (
            <div className="App">
            <Header />
                <div className='pages'>
                    <Routes>
                        <Route path="/" element={<Apropos />} />
                        <Route path="/Produits" element={<Shop />} />
                        <Route path='/Contact' element={<Contact/>}/>
                        <Route path='/Cart' element={<Cart />}/>
                        <Route path='/product1' element={<Costume />}/>
                        <Route path='/product2' element={<Costume2 />}/>
                        <Route path='/product3' element={<Costume3 />}/>
                        <Route path='/product4' element={<Costume4 />}/>
                        <Route path='/product5' element={<Costume5 />}/>
                        <Route path='/product6' element={<Costume6 />}/>
                        <Route path='/product7' element={<Costume7 />}/>
                        <Route path='/product8' element={<Costume8 />}/>
                    </Routes>
                </div>
                <Footer />
            </div>
  );
}


// function App() {
  
//     return (
//         <Router>
//             <div className="App">
//             <Header />
//                 <div className='pages'>
//                     <Routes>
//                         <Route path="/PFA/" element={<Apropos />} />
//                         <Route path="/Produits" element={<Shop />} />
//                         <Route path='/PFA/Contact' element={<Contact/>}/>
//                         <Route path='/PFA/Signup' element={<Signup/>}/>
//                         <Route path='/Login' element={<Login/>}/>
//                         <Route path='/PFA/Cart' element={<Cart />}/>
//                         <Route path="/CPU" element={<CPU />} />
//                         <Route path="/GPU" element={<GPU />} />
//                         <Route path="/Motherboard" element={<Motherboard />} />
//                         <Route path="/Case" element={<Case />} />
//                         <Route path="/RAM" element={<RAM />} />
//                         <Route path="/SSD" element={<SSD />} />
//                     </Routes>
//                 </div>
//                 <Footer />
//             </div>
//         </Router>
//   );
// }

export default App;
