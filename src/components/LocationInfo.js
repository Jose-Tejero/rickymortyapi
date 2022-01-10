import React from 'react';

const LocationInfo = ({name, type, dimension, population}) => {
    return (
        <div>            
            <h2>{name}</h2>
            <div className='dataLocation' >
                <h3>Type: {type}</h3>
                <h3>Dimension: {dimension}</h3>
                <h3>Population: {population}</h3>
            </div>
        </div>
    );
};

export default LocationInfo;