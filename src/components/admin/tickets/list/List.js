
import React from 'react';
import styled from 'styled-components';
import ListRow from './ListRow';
import Pagenation from '../../../common/Pagenation';
import useLoading from '../../../common/hooks/useLoading';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 50px;
    margin: 10px;
    width: calc(50% - 20px);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
`;

const ToolBarWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px 10px 0 0;
`;

const ListWrapper = styled.div`
    overflow: scroll;
`;

const PagenationWrapper = styled.div`
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

`;

const SearchInput = styled.input`
    margin-left: 10px;
    background: none;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: 30px;
    outline: none;
    font-size: 12pt;
    padding: 10px;

    ::placeholder {
        color: ${ props => props.theme.textColorTwo };
    }
`;

const List = ({ page, onTicketSelect }) => {
    const render = useLoading();

    const handleRowClick = (ticketId) => {
        if (onTicketSelect) onTicketSelect(ticketId);
    }

    const renderDoneState = () => {
        return (
            <Wrapper>
                <ToolBarWrapper>
                    <SearchInput placeholder="Search..."></SearchInput>
                </ToolBarWrapper>
                <ListWrapper>
                    {
                        page.data ?
                        page.data.map(ticket => {
                            return (
                                <ListRow 
                                 key={ticket._id}
                                 data={ticket}
                                 onClick={() => handleRowClick(ticket._id)}
                                />
                            )
                        }) :
                        'No tickets'
                    }
                </ListWrapper>
                <PagenationWrapper>
                    <Pagenation />
                </PagenationWrapper>
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: page.status.text });
}

export default List;