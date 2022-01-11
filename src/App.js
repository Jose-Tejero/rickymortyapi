import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';

const randomId = Math.floor((Math.random() * 126) + 1)

function App() {

  const [ location, setLocation ] = useState({});
  const [ loader, setLoader ] = useState(false);

  useEffect (() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data));
    setLoader(true);
  }, []);

  console.log(location)

  return (
    <div className="App">
      {
        loader ? (
          <>
            <SearchBox setLocation={setLocation} />
            <LocationInfo
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              population={location.residents?.length}
              />
            <ResidentsList
              location={location}
              population={location.residents?.length}
            />
          </>
        ) : (
          <div className='loader' ></div>
        )
      }
    </div>
  );
}

export default App;