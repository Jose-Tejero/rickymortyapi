import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {

    const [ id, setId ] = useState("");

    const search = e => {
        e.preventDefault();
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data));
    }

    return (
        <div>
            <form>
                <input type="text" onChange={e => setId(e.target.value)} value={id} required />
                <button onClick={search} >Search</button>
            </form>
        </div>
    );
};

export default SearchBox;