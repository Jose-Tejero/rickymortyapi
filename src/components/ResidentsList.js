import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({location, population}) => {

    const [ width, setWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth);

        window.addEventListener( 'resize', changeWidth )

        return () => window.removeEventListener( 'resize', changeWidth );
    }, []);

    console.log(width);

    return (
        <div>
            {
                width>768 ? (
                    <>
                        <div className='map-info' >
                            {
                                location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(0,6)
                            }
                        </div>
                        <button>Prev</button>
                        <button>Next</button>
                    </>
                ) : (
                    <>
                        <div className='map-info' >
                            {
                                location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(0,2)
                            }
                        </div>
                        <button>Prev</button>
                        <button>Next</button>
                    </>
                )
            }
        </div>
    );
};

export default ResidentsList;