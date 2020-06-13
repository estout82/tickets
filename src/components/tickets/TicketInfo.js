
import React from 'react';

import Button from '../common/Button';
import Dropdown from '../common/Dropdown';
import DropdownItem from '../common/DropdownItem';

const TicketInfo = (props) => {
    return (
        <>
            <Dropdown title="Beau DeGraaf">
                <DropdownItem>Eric Stoutenburg</DropdownItem>
                <DropdownItem>Matt Cantu</DropdownItem>
            </Dropdown>
            <Dropdown title="Hardware Request">
                <DropdownItem>Eric Stoutenburg</DropdownItem>
                <DropdownItem>Matt Cantu</DropdownItem>
            </Dropdown>
            <Dropdown title="High Priority">
                <DropdownItem>Eric Stoutenburg</DropdownItem>
                <DropdownItem>Matt Cantu</DropdownItem>
            </Dropdown>
            <Button>Due 10-6-20</Button>
        </>
    );
}

export default TicketInfo;