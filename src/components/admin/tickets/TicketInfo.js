
import React from 'react';

import Button from '../../common/Button';
import Dropdown from '../../common/Dropdown';

const TicketInfo = (props) => {
    return (
        <>
            <Dropdown name='assignee' defaultValue="Beau DeGraaf"
                options={['Mattew Snook', 'Matt Cantu']}/>
            <Dropdown name='category' defaultValue="Hardware Issue"
                options={['Software Issue', 'Network Issue']} />
            <Dropdown name='priority' defaultValue="High"
                options={['High', 'Low']}/>
            <Button>Due 10-6-20</Button>
        </>
    );
}

export default TicketInfo;