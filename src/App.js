import './App.css';
import { Link } from 'react-router-dom';





function App() {

  return (
    <div className="App">
      <img className='Appimg' src="vieleBiere.png" alt="" />
      <li><Link to="/AllBeer">All Beers</Link></li>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <img className='Appimg' src="fünfBiere.png" alt="" />
      <li><Link to="/randomBeer">Random Beer</Link></li>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus consequuntur deleniti aut minus cupiditate tempore laudantium corrupti modi error.</p>
    </div>
  );
}

export default App;