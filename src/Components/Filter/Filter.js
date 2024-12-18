import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/FoodsSlice";


const Filter =({category})=> {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <div className="filter-category">
            <p onClick={()=> {dispatch(filterCategory(category))}} 
                className = {selectedCategory === category ? 'categoryButtonSelected categoryButton': 'categoryButton'}>
                {category}</p>
            
        </div>
    )

}
export default Filter;
