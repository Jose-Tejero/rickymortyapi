import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({location}) => {
    return (
        <div>
            {
                location.residents?.map(resident => <ResidentInfo key={resident} resident={resident} locationId={location.id} />)
            }
        </div>
    );
};

export default ResidentsList;