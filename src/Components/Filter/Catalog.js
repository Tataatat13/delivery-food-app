import Filter from "./Filter";
import "./CatalogStyles.css";
import PayList from "../Payfolder/PayList";

const Catalog =()=> {
    return (
        <div className="header">
            <h1>Our menu</h1>
            <h3>Food Delivery App</h3>

            <div className="category-box">
                                
                    {['ALL', 'SALAD', 'SEAFOOD', 'BOWL', 'SUSHI', 'PIZZA','PASTA', 'BURGERS', 'DESSERT']
                    .map(category => <Filter key={category} category={category}/>)}
        
        
                
                </div>
                <div className="pay-shopCart">
                <PayList/>
                </div>
                
        </div>
    )
}
export default Catalog;