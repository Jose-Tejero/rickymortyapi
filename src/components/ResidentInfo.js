import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident, locationId}) => {

    const [ being, setBeing ] = useState({});

    useEffect (() => {
        axios.get(resident)
            .then(res => setBeing(res));
    }, [resident])

    console.log(being);

    return (
        <div>
            <h3>{being.data?.name}</h3>
            <img src={being.data?.image} alt="" />
            <p>Status: {being.data?.status}</p>
            <p>Origin: {being.data?.origin.name}</p>
            <p>Number of episodes: {being.data?.episode.length}</p>
        </div>
    );
};

export default ResidentInfo;