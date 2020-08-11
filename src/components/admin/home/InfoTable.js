
import React, { useState } from 'react';
import styled from 'styled-components';
import InfoTableHeader from './InfoTableHeader';
import InfoTableBody from './InfoTableBody';
import InfoModal from './InfoModal';

const Wrapper = styled.div`
    padding: 0 10px 10px 10px;
`;

const InfoTable = (props) => {
    const [ users, setUsers ] = useState([
        {
            name: "Matt Cantu",
            organization: "Ministry Support",
            tags:  [ 'green', 'yellow' ],
            department: "IT",
            openTicketCount: 3,
            assetCount: 4,
            itemCount: 1,
            onLoanCount: 0 
        }
    ]);
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
             data={ users } 
             onRowClick={ handleRowClick }
            />
            {
                infoModalShown ?
                <InfoModal
                 data={ users[0] }
                 onClose={ handleInfoModalClose }    
                />
                : null
            }
        </Wrapper>
    );
}

export default InfoTable;