import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({location, population}) => {

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ page, setPage ] = useState(0);

    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth);

        window.addEventListener( 'resize', changeWidth )

        return () => window.removeEventListener( 'resize', changeWidth );
    }, []);

    const handleNextPage = () => {
        if (page < (population - 6)) {
            setPage(page + 6)
        }
    }

    const handlePreviusPage = () => {
        if (page > 0) {
            setPage(page - 6)
        }
    }

    console.log(page);

    return (
        <div>
            {
                width>768 ? (
                    population>6 ? (
                        <>
                            <div className='map-info' >
                                {
                                    location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(page,page + 6)
                                }
                            </div>
                            <button onClick={handlePreviusPage} >Prev</button>
                            <button onClick={handleNextPage} >Next</button>
                        </>
                    ) : (
                        <>
                            <div className='map-info' >
                                {
                                    location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(0,6)
                                }
                            </div>
                        </>
                    )
                ) : (
                    population>2 ? (
                        <>
                            <div className='map-info' >
                                {
                                    location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(0,2)
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
                        </>
                    )
                )
            }
        </div>
    );
};

export default ResidentsList;