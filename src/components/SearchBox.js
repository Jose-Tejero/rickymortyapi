import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {

    const [ id, setId ] = useState("");

    const search = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data));
    }

    return (
        <div>
            <input type="text" onChange={e => setId(e.target.value)} value={id} />
            <button onClick={search} >Search</button>
        </div>
    );
};

export default SearchBox;