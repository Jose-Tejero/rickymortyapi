import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({location}) => {

    const [ width, setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth);

        window.addEventListener( 'resize', changeWidth )

        return () => window.removeEventListener( 'resize', changeWidth );
    }, []);

    console.log(width);

    return (
        <div className='map-info' >
            {
                width>480 ? (location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(0,6)) : (location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(0,2))
            }
        </div>
    );
};

export default ResidentsList;