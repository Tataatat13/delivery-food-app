import { useSelector } from 'react-redux';
import dataFoods from '../../Data/dataFoods';
import Food from './Food';
import { getSelectedCategory } from '../../redux/FoodsSlice';


const Foods =() => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className='foods-container'>
            {dataFoods.filter (food => {
                if (selectedCategory === 'ALL') return true;
                
                return selectedCategory === food.category;
            })
            .map(food =>  <Food key={food.id} food ={food}/>)}
        </div>
    )
}
export default Foods;