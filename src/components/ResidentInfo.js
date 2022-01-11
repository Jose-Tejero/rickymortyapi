import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident, locationId}) => {

    const [ being, setBeing ] = useState({});

    useEffect (() => {
        axios.get(resident)
            .then(res => setBeing(res));
    }, [resident])

    const styles = {
        Alive: {
            border: "10px solid #00AB08",
            boxShadow: "0 0 15px #00AB08"            
        },
        Dead: {
            border: "10px solid #920717",
            boxShadow: "0 0 15px #920717"
        }
    }

    return (
        <div className='card' >
            <h3 className="name-of-beig">{being.data?.name}</h3>
            <div className='image-n-datas' >
                <img src={being.data?.image} alt="" style={styles[being.data?.status]} />
                <div className="datas">
                    <p>Status: {being.data?.status}</p>
                    <p>Origin: {being.data?.origin.name}</p>
                    <p>Episodes: {being.data?.episode.length}</p>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;