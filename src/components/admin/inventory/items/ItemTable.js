
import React from 'react';
import Table from '../../../common/Table';

const ItemTable = (props) => {

    const data = {
        head: [
            'Name',
            'Category',
            'On-Hand'
        ], 
        body: [
            [ 'USB-C to HDMI Adapter', 'Adapter', '4' ],
            [ '7ft Ethernet Cable', 'Cable', '16' ],
            [ 'Thunderbolt 3 Cable', 'Cable', '2' ]
        ]
    }

    return (
        <Table 
         data={ data }
         onRowClick={ props.onRowClick }
        />
    );
}

export default ItemTable;