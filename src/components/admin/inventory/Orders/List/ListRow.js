
import React from 'react';
import styled from 'styled-components';
import PillLabel from '../../../../common/PillLabel';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 40px;
    margin-bottom: 3px;
    border-radius: 5px;
    padding: 0 5px;

    &:hover {
        background: ${ props => props.theme.backgroundColorOne };
        cursor: pointer;
    }

    & > div {
        padding-right: 10px;
    }
`;

const ListRow = ({ data, metadata, onClick }) => {
    // called when a row is clicked
    // passes the clicked row's order id up the chain to display the order edit pane
    const handleClick = (orderId) => {
        onClick(orderId)
    }

    console.log(metadata);

    return (
        <Wrapper
         onClick={ () => handleClick(data._id) }>
            <div>
                <PillLabel>{ data.number }</PillLabel>
            </div>
            <div>
                {
                    data.status ?
                    <PillLabel appearence={ metadata.data.statuses[data.status].appearence }>
                        { metadata.data.statuses[data.status].label }
                    </PillLabel> :
                    <PillLabel appearence="none">
                        None
                    </PillLabel>
                }
            </div>
            <div>
                {
                    data.category ?
                    <PillLabel appearence={ metadata.data.categories[data.category].appearence }>
                        { metadata.data.categories[data.category].label }
                    </PillLabel> :
                    <PillLabel appearence="none">
                        No Category
                    </PillLabel>
                }
            </div>
        </Wrapper>
    );
}

export default ListRow;