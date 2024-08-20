import Filter from "./Filter";

const Catalog =()=> {
    return (
        <div>
            <h1>What do you want to order?</h1>
            <div className="category-box">
                
                    
                    {['ALL', 'SALAD', 'SEAFOOD', 'BOWL', 'SUSHI', 'PIZZA','PASTA', 'BURGERS-HOTDOG-SANDWICH', 'DESSERT']
                    .map(category => <Filter key={category} category={category}/>)}
        
                
                </div>
        </div>
    )
}
export default Catalog;