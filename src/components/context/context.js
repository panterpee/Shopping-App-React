import { useState, createContext, useContext} from "react";

const CartContext = createContext();

export default function CartProvider({children}){
const [count, setCount] = useState(0);
const [cartproduct, setCartproduct] = useState([])
const [total,setTotal] = useState(0);
const [searchinput,setSearchinput] = useState("");

function Addproduct(product) {
    setCount(prevCount => prevCount + 1);
    setCartproduct((prevCart) => [...prevCart, product])
}
function DeleteCart(id){
    setCartproduct((prevCart)=> prevCart.filter((product) => product.id !== id));
    setCount(prevCount => prevCount - 1)
}
function Totalprice(price){
    setTotal((prevTotal)=> prevTotal + price)
}
function Deprice(price){
    setTotal((prevTotal)=> prevTotal - price)
}


    return(
        <CartContext.Provider value={{count,Addproduct,cartproduct,DeleteCart,total,Totalprice,Deprice,searchinput,setSearchinput}}>
            {children}
        </CartContext.Provider>
  );
}

export const useCart=()=>{
    return useContext(CartContext)
}