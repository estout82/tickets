
// TODO: lazy load assets on expand ? - low priority

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Accordian from '../../../../../common/Accordian';
import useAssetBatch from '../../../../../../config/stores/asset/useAssetBatch';
import useLoading from '../../../../../common/hooks/useLoading';

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 10pt;

    p {

    }
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

const Assets = ({ data }) => {
    let assets = useAssetBatch(data.assetIds);

    // local state - determines if the accordian is expanded
    const [expanded, setExpanded] = useState(false);

    // loading hook - only render assets in accordian if they are loaded
    const renderWhenLoaded = useLoading(useCallback(() => {
        if (assets && assets.status === 'done') return { status: 'done' };
        else if (assets & assets.status === 'error') return { status: 'error' };

        return { status: 'loading' };
    }, [assets]));

    const handleExpand = () => {
        setExpanded(true);
    }

    const handleCollapse = () => {
        setExpanded(false);
    }

    // passed to the renderWhenLoaded function to render after assets are loaded
    const render = () => {
        return (
            <>
                {
                    assets.assets ?
                    Object.keys(assets.assets).map(key => {
                        const asset = assets.assets[key];

                        return (
                            <Row key={ asset._id }>
                                <p>{ asset.name }</p>
                                <GotoLinkWrapper>
                                    View
                                </GotoLinkWrapper>
                            </Row>
                        );
                    }) :
                    <Row>No assets</Row>
                }
            </>
        );
    }

    return (
        <Accordian
         title="Assets"
         isExpanded={ expanded }
         onExpand={ handleExpand }
         onCollapse={ handleCollapse }>
            {
                renderWhenLoaded(render)
            }
        </Accordian>
    );
}

export default Assets;