import { useState } from "react";
import ChangeQuantity from "../Payfolder/ChangeQuantity";
import { addItemToCart } from "../../redux/PaySlice";
import { useDispatch } from "react-redux";

const Food =({food})=> {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
    <div className="food-container">
        <div className="food-block">
            <h4>{food.name}</h4>
            <img src={`./${food.img}.jpg`} alt="foto"/>
            <p> $ {food.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity ={setQuantity}/>
            <button className="btn-quantity" onClick={()=> {dispatch (addItemToCart ({food, quantity}));}}>Add to cart</button>
            
        </div>
    </div>
    )
}
export default Food;
