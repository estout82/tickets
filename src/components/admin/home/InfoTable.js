
import React, { useState } from 'react';
import styled from 'styled-components';
import InfoTableHeader from './InfoTableHeader';
import InfoTableBody from './InfoTableBody';
import InfoModal from './InfoModal';
import useUserPage from '../../../config/stores/user/hooks/useUserPage';

const Wrapper = styled.div`
    padding: 0 10px 10px 10px;
`;

const InfoTable = (props) => {
    const [ infoModalData, setInfoModalData ] = useState();
    const page = useUserPage(0);

    const handleRowClick = (index) => {
        // TODO: fix this jank ass crap
        setInfoModalData(page.users[Object.keys(page.users)[index]].data);
    }

    const handleInfoModalClose = () => {
        setInfoModalData(null);
    }

    return (
        <Wrapper>
            <InfoTableHeader />
            <InfoTableBody 
             data={ page }
             onRowClick={ handleRowClick }
            />
            {
                infoModalData ?
                <InfoModal
                 data={ infoModalData }
                 onClose={ handleInfoModalClose }    
                />
                : null
            }
        </Wrapper>
    );
}

export default InfoTable;