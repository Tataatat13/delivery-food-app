import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { getTotalPrice, getTotalQuantity } from "../../redux/PaySlice";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/PaySlice";
import CartItem from "./CartItem";
import "./CartItemStyles.css";


const PayList =()=>{
    const cartItems = useSelector(getCartItems);
    const totalPrice =useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity);
    let [cartOpen, setCartOpen] = useState(false);
    return(
        <div className="pay-box">
            <TiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
            className={`shop-cart-button ${cartOpen && 'active'}`} />

            {totalQuantity > 0 && <span className="item-count">{totalQuantity}</span>}

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