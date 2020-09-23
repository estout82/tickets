
import React from 'react';

import Button from '../../../common/Button';
import Select from '../../../common/Select';

const TicketInfo = (props) => {
    return (
        <>
            <Select name='assignee' defaultValue="Beau DeGraaf"
                options={ {mattewSnook: 'Mattew Snook', mattCantu: 'Matt Cantu'} }/>
            <Select name='category' defaultValue="Hardware Issue"
                options={ {softwareIssue: 'Software Issue', networkIssue: 'Network Issue'} } />
            <Select name='priority' defaultValue="High"
                options={ {high: 'High', low: 'Low'} }/>
            <Button>Due 10-6-20</Button>
        </>
    );
}

export default TicketInfo;