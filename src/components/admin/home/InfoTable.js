
import React, { useState } from 'react';
import styled from 'styled-components';
import InfoTableHeader from './InfoTableHeader';
import InfoTableBody from './InfoTableBody';
import InfoModal from './InfoModal';

const Wrapper = styled.div`
    padding: 0 10px 10px 10px;
`;

const InfoTable = (props) => {
    const [ infoModalShown, setInfoModalShown ] = useState(false);

    const handleRowClick = (index) => {
        setInfoModalShown(true);
    }

    const handleInfoModalClose = () => {
        setInfoModalShown(false);
    }

    return (
        <Wrapper>
            <InfoTableHeader />
            <InfoTableBody 
             data={ props.data }
             onRowClick={ handleRowClick }
            />
            {
                infoModalShown ?
                <InfoModal
                 onClose={ handleInfoModalClose }    
                />
                : null
            }
        </Wrapper>
    );
}

export default InfoTable;