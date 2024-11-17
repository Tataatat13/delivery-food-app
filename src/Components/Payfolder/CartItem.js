import dataFoods from "../../Data/dataFoods";
import { MdDelete } from "react-icons/md";
import { removeItemFromCart } from "../../redux/PaySlice";
import { useDispatch } from "react-redux";


const CartItem =({cartItem})=> {
    const foods = dataFoods.find (item => item.id === cartItem.foodId);
    const dispatch = useDispatch();

    return(
        <div className="item-box">
            
            <h4>{foods.name}</h4>

            <div>
            <p>{cartItem.quantity} portion(s)</p>
            <p>Price: $ {foods.price * cartItem.quantity}</p>
            </div>

            <MdDelete onClick={()=> dispatch(removeItemFromCart({cartItemId: cartItem.id})) } />
        </div>
    )
}
export default CartItem;