import { useState } from "react";
import ChangeQuantity from "../Payfolder/ChangeQuantity";
import { addItemToCart } from "../../redux/PaySlice";
import { useDispatch } from "react-redux";


const Food =({food})=> {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
    
        <div className="food-block">
            <img src={`./${food.img}.jpg`} alt="foto"/>
            <h4>{food.name}</h4>
            <p> $ {food.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity ={setQuantity}/>
            <button onClick={()=> {dispatch (addItemToCart ({food, quantity}));}}>Add to cart</button>
        
        </div>
    
    )
}
export default Food;
