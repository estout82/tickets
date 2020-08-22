
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from './Head';
import Body from './Body';
import EditModal from './EditModal/EditModal';
import useUserPage from '../../../../../config/stores/user/hooks/useUserPage';

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
            <Head />
            <Body 
             data={ page }
             onRowClick={ handleRowClick }
            />
            {
                infoModalData ?
                <EditModal
                 data={ infoModalData }
                 onClose={ handleInfoModalClose }    
                />
                : null
            }
        </Wrapper>
    );
}

export default InfoTable;