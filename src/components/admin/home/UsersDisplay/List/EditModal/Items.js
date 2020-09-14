
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Accordian from '../../../../../common/Accordian';
import useItemBatch from '../../../../../../config/stores/item/useItemBatch';
import useLoading from '../../../../../common/hooks/useLoading';

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 10pt;
`;

const GotoLinkWrapper = styled.div`
    border: 1px solid ${ props => props.theme.highlightColorOne };
    color: ${ props => props.theme.highlightColorOne };
    padding: 3px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .15s color, .15s background;
    font-size: 8pt;

    &:hover {
        cursor: pointer;
        color: white;
        background: ${ props => props.theme.highlightColorOne };
    }
`;

const Items = ({ data }) => {
    const itemBatch = useItemBatch(['5eff1b0ef7f2e011f7978b71']);
    const [expanded, setExpanded] = useState(false);
    const renderWhenLoaded = useLoading(useCallback(() => {
        if (itemBatch && itemBatch.status === 'loading') return { status: 'loading' };
        else if (itemBatch && itemBatch.status === 'error') return { status: 'error' };
        else if (itemBatch && itemBatch.status === 'done') return { status: 'done' }; 
    }, [itemBatch]));

    const handleExpand = () => {
        setExpanded(true);
    }

    const handleCollapse = () => {
        setExpanded(false);
    }

    const renderInner = () => {
        return (
            <>
                {
                    itemBatch.items &&
                    Object.keys(itemBatch.items).map(key => {
                        const item = itemBatch.items[key];

                        return (
                            <Row key={item._id}>
                                <p>{ item.name }</p>
                                <p>New: { 1 }</p>
                                <p>Refurb: { 3 }</p>
                                <GotoLinkWrapper>View</GotoLinkWrapper>
                            </Row>
                        )
                    })
                }
            </>
        );
    }

    return (
        <Accordian
         title="Items"
         isExpanded={ expanded }
         onExpand={ handleExpand }
         onCollapse={ handleCollapse }>
            { renderWhenLoaded(renderInner) }
        </Accordian>
    );
}

export default Items;