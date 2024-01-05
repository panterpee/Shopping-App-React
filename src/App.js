import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/Navbar';
import ControlledCarousel from './components/Suggest';
import Products from './components/Products';
import CartProvider from './components/context/context';

function App() {
  return (
    <>
    <CartProvider>
      <Mynavbar/>
      <div style={{width: "70vw", marginLeft:"auto", marginRight:"auto", marginTop:"20px"}}>
      <ControlledCarousel/>
      </div>
      <Products/>
    </CartProvider>
    </>
  );
}

export default App;
