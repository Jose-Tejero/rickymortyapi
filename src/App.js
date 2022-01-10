import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo';

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
      <LocationInfo
        name={location.name}
        type={location.type}
        dimension={location.dimension}
        population={location.residents?.length}
      />
    </div>
  );
}

export default App;