import './App.css';
import Catalog from './Components/Filter/Catalog';
import Foods from './Components/FoodComponents/Foods';
import PayList from './Components/Payfolder/PayList';

function App() {
  return (
  <div className="App">
      
      <div className='header'>
          <div className='catalog-box'>
            <Catalog/>
          </div>
      
          <div className='food-box'>
            <Foods/>
          </div>
      </div>

          <div className='pay-box'>
            <PayList/>
          </div>

  </div>
  );
}

export default App;
