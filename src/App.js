import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/Navbar';
import ControlledCarousel from './components/Carosel';
import Products from './components/Products';
import CartProvider from './components/context/context';

function App() {
  return (
    <>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <CartProvider>
      <Mynavbar/>
      <div className='carousel-container'>
      <ControlledCarousel/>
      </div>
      <div className='product-container'>
      <Products/>
      </div>
    </CartProvider>
    </>
  );
}

export default App;
