
import React from 'react';
import styled from 'styled-components';
import Pill from '../../../../common/Pill';

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

    return (
        <Wrapper
         onClick={ () => handleClick(data._id) }>
            <div>
                <Pill>{ data.number }</Pill>
            </div>
            <div>
                {
                    data.status ?
                    <Pill appearence={ metadata.data.statuses[data.status].appearence }>
                        { metadata.data.statuses[data.status].label }
                    </Pill> :
                    <Pill appearence="none">
                        None
                    </Pill>
                }
            </div>
            <div>
                {
                    data.category ?
                    <Pill appearence={ metadata.data.categories[data.category].appearence }>
                        { metadata.data.categories[data.category].label }
                    </Pill> :
                    <Pill appearence="none">
                        No Category
                    </Pill>
                }
            </div>
        </Wrapper>
    );
}

export default ListRow;