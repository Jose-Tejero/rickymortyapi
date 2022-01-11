import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({location, population}) => {

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ page6, setPage6 ] = useState(0);
    const [ page2, setPage2 ] = useState(0);

    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth);

        window.addEventListener( 'resize', changeWidth )

        return () => window.removeEventListener( 'resize', changeWidth );
    }, []);

    useEffect(() => {
        setPage2(0);
        setPage6(0);
    }, [population])

    const handleNextPage6 = () => {
        if (page6 < (population - 6)) {
            setPage6(page6 + 6)
        }
    }

    const handlePreviusPage6 = () => {
        if (page6 > 0) {
            setPage6(page6 - 6)
        }
    }

    const handleNextPage2 = () => {
        if (page2 < (population - 2)) {
            setPage2(page2 + 2)
        }
    }

    const handlePreviusPage2 = () => {
        if (page2 > 0) {
            setPage2(page2 - 2)
        }
    }

    console.log(page2);
    console.log(population);

    return (
        <div>
            {
                width>768 ? (
                    population>6 ? (
                        <>
                            <div className='map-info' >
                                {
                                    location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(page6,page6 + 6)
                                }
                            </div>
                            <div className="prev-next">
                                <button onClick={handlePreviusPage6} >Prev</button>
                                <span>{page6 + 1}-{page6 + 6}</span>
                                <button onClick={handleNextPage6} >Next</button>
                            </div>
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
                                    location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />).slice(page2,page2 + 2)
                                }
                            </div>
                            <div className="prev-next">
                                <button onClick={handlePreviusPage2} >Prev</button>
                                <span>{page2 + 1}-{page2 + 2}</span>
                                <button onClick={handleNextPage2} >Next</button>
                            </div>
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