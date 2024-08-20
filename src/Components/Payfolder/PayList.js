import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { getTotalPrice } from "../../redux/PaySlice";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/PaySlice";
import CartItem from "./CartItem";


const PayList =()=>{
    const cartItems = useSelector(getCartItems);
    const totalPrice =useSelector(getTotalPrice);

    let [cartOpen, setCartOpen] = useState(false);
    return(
        <div>
            <TiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        {cartOpen && (
            <div className="shop-cart">
            {cartItems.map (cartItem => <CartItem key={cartItem.id} cartItem = {cartItem}/>)} 
            <h3> TOTAL: $ {totalPrice}</h3>

            </div>
        )}
        
        </div>
    )
}
export default PayList;