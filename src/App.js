import './App.css';
import Catalog from './Components/Filter/Catalog';
import Foods from './Components/FoodComponents/Foods';
import BottomImg from "./assets/Food delivery 1.png";

function App() {
  return (
  <div className="App">
            
            <Catalog/>
            <Foods/>
            
            <div className='bottom'>
            <img src={BottomImg} alt='img'/>
            </div>
            
  </div>
  );
}

export default App;
