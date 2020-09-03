import React, {useState,useEffect} from 'react';
import './App.css';
import { CardList } from './components/cardList/CardList';

function App() {

  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
    console.log('component mounted',monsters);

  });

  return (
    <div className="App">
     <h1>Monsters Rolodex</h1>
     <CardList monsters={monsters} />
    </div>
  );
}

export default App;
