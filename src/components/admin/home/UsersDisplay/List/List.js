
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from './Head';
import Body from './Body';
import EditModal from './EditModal/EditModal';
import Controls from './Controls';
import useUserPage from '../../../../../config/stores/user/useUserPage';

const Wrapper = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;
    padding: 0 10px 10px 10px;
`;

const List = () => {
    const [editModalData, setEditModalData] = useState();
    const pageData = useUserPage(1);

    const handleRowClick = (index) => {
        // TODO: fix this jank ass crap
        const selectedUser = pageData.users[index];

        setEditModalData({
            firstName: selectedUser.firstName,
            lastName: selectedUser.lastName,
            organizationName: selectedUser.organization ? 
                selectedUser.organization.name : null,
            tags: selectedUser.tags,
            departmentName: selectedUser.department ? 
                selectedUser.department.name : null,
            tickets: selectedUser.tickets,
            items: selectedUser.items,
            assets: selectedUser.assets
        });
    }

    const handleInfoModalClose = () => {
        setEditModalData(null);
    }

    return (
        <Wrapper>
            <Head />
            <Body
             data={ pageData }
             onRowClick={ handleRowClick }
            />
            <Controls />
            {
                editModalData ?
                <EditModal
                 data={ editModalData }
                 onClose={ handleInfoModalClose }    
                />
                : null
            }
        </Wrapper>
    );
}

export default List;