
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Productspage from './pages/productspage';
import Productdetailspage from './pages/productdetailspage';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Homepage/>}/> */}
            <Route path='/' element={<Productspage/>}/>
            <Route path='/productdetails' element={<Productdetailspage/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
