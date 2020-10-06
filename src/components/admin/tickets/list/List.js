
import React from 'react';
import styled from 'styled-components';
import ListRow from './ListRow';
import Pagenation from '../../../common/Pagenation';
import useLoading from '../../../common/hooks/useLoading';
import usePagenation from '../../../common/hooks/usePagenation';
import useNumTicketPages from '../../../../config/stores/tickets/useNumTicketPages';
import useTicketPage from '../../../../config/stores/tickets/useTicketPage';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 50px;
    margin: 10px;
    width: calc(50% - 20px);
    height: calc(100% - 20px);
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

const List = ({ onTicketSelect }) => {
    const numPages = useNumTicketPages();
    const pagenation = usePagenation(numPages.data);
    const page = useTicketPage(pagenation.currentPage);
    const render = useLoading();

    const handleRowClick = (ticketId) => {
        if (onTicketSelect) onTicketSelect(ticketId);
    }

    const handlePageChange = (newPage) => {
        pagenation.goToPage(newPage);
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
                    <Pagenation 
                     numPages={ numPages.data }
                     currentPage={ pagenation.currentPage } 
                     onPageChange={ handlePageChange } 
                    />
                </PagenationWrapper>
            </Wrapper>
        );
    }

    return render(renderDoneState, () => {
        if (numPages.status.text !== 'done') return { status: numPages.status.text };
        else if (page.status.text !== 'done') return { status: page.status.text };

        return { status: 'done' };
    });
}

export default List;