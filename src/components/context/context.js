import { useState, createContext, useContext, useEffect} from "react";

const CartContext = createContext();

export default function CartProvider({children}){
const [count, setCount] = useState(0);
const [cartproduct, setCartproduct] = useState([]);
const [total,setTotal] = useState(0);
const [index, setIndex] = useState(0);
const [searchinput,setSearchinput] = useState("");

function Addproduct(clickedProduct) {
    const productAlreadyInCart = cartproduct.find((product) => product.title === clickedProduct.title);
  
    if (!productAlreadyInCart) {
      setCount(count + 1);
      setCartproduct([...cartproduct,{ ...clickedProduct, amount: 1 }]);
    } else {
      setCount(count + 1);
      setCartproduct(
        cartproduct.map((product) =>
        product.id === clickedProduct.id ? { ...product, amount: Addamount(product.amount) } : product
        )
      );
    }
  }

function DeleteCart(delproduct){
    setCartproduct((prevCart)=> prevCart.filter((product) => product.id !== delproduct.id));
    setCount(prevCount => prevCount - 1*(delproduct.amount))
}

function Deprice(price){
    setTotal((prevTotal)=> prevTotal - price)
}
function Addamount(amount) {
    return amount + 1;
  }
function handleSelect(selectedIndex){
    setIndex(selectedIndex);
  };
 function handleSearchClick() {
    setSearchinput(document.getElementById('searchInput').value);
  };


useEffect(() => {
 function Totalprice() {
        const totalPrice = cartproduct.reduce((acc, product) => acc + product.price * product.amount, 0);
        setTotal(totalPrice);
      }

    Totalprice();
  }, [cartproduct]);

    return(
        <CartContext.Provider value={{count,Addproduct,cartproduct,DeleteCart,total,Deprice,searchinput,setSearchinput,Addamount,index,handleSelect,handleSearchClick}}>
            {children}
        </CartContext.Provider>
  );
}

export const useCart=()=>{
    return useContext(CartContext)
}