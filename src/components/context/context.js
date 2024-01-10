import { useState, createContext, useContext, useEffect} from "react";

const CartContext = createContext();

export default function CartProvider({children}){
const [count, setCount] = useState(0);
const [cartproduct, setCartproduct] = useState([])
const [total,setTotal] = useState(0);
const [searchinput,setSearchinput] = useState("");

function Addproduct(filteredProduct) {
    const productAlreadyInCart = cartproduct.find(product => product.title === filteredProduct.title);

    if (!productAlreadyInCart) {
        console.log("Adding product to cart:", filteredProduct);
        setCount(prevCount => prevCount + 1);
        setCartproduct(prevCart => [...prevCart, filteredProduct]);
        Totalprice()
    } else {
        alert("Already have this product in cart");
    }
}
function DeleteCart(id){
    setCartproduct((prevCart)=> prevCart.filter((product) => product.id !== id));
    setCount(prevCount => prevCount - 1)
}
function Totalprice() {
    const totalPrice = cartproduct.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalPrice);
  }
function Deprice(price){
    setTotal((prevTotal)=> prevTotal - price)
}

useEffect(() => {
    Totalprice();
  }, [cartproduct]); 

    return(
        <CartContext.Provider value={{count,Addproduct,cartproduct,DeleteCart,total,Totalprice,Deprice,searchinput,setSearchinput}}>
            {children}
        </CartContext.Provider>
  );
}

export const useCart=()=>{
    return useContext(CartContext)
}