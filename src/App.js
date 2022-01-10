import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';

const randomId = Math.floor((Math.random() * 126) + 1)

function App() {

  const [ location, setLocation ] = useState({});

  useEffect (() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data))
  }, []);

  console.log(location)

  return (
    <div className="App">
      <SearchBox setLocation={setLocation} />
      <h2>{location.name}</h2>
      <div className='dataLocation' >
        <h3>Type: {location.type}</h3>
        <h3>Dimension: {location.dimension}</h3>
        <h3>Population: {location.residents?.length}</h3>
      </div>
    </div>
  );
}

export default App;