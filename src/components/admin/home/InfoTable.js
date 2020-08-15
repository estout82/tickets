
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
    const userPageData = useUserPage(0);

    const handleRowClick = (index) => {
        setInfoModalData(userPageData.users[index]);
    }

    const handleInfoModalClose = () => {
        setInfoModalData(null);
    }

    return (
        <Wrapper>
            <InfoTableHeader />
            <InfoTableBody 
             data={ userPageData }
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