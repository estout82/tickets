
import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import CommentList from './CommentList';
import useLoading from '../../../common/hooks/useLoading';
import useTicket from '../../../../config/stores/tickets/useTicket';
import Pill from '../../../common/Pill';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 60px auto min-content minmax(200px, min-content) 1fr;
    margin: 10px;
    width: calc(50% - 20px);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-weight: 300;
    font-size: 10pt;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    grid-column: 1 / 4;
`;

const DescriptionWrapper = styled.div`
    overflow: scroll;
    padding: 0 20px;
    margin: 0;
    grid-column: 1 / 4;

    p {
        margin: 0;
    }
`;

const ToDoWrapper = styled.div`
    grid-column: 1;
    padding: 0 20px;
`;

const InfoWrapper = styled.div`
    grid-column: 1 / 4;
    padding: 10px 20px;
`;

const CommentWrapper = styled.div`
    grid-column: 1 / 4;
    overflow: scroll;
`;

const Ticket = ({ ticketId }) => {
    const render = useLoading();
    const ticket = useTicket(ticketId);

    const handleAddTodo = () => {

    }

    const handleUpdateTodo = () => {

    }

    const handleToggleTodo = () => {

    }

    const renderDoneState = () => {
        return (
            <Wrapper>
                <TitleWrapper>
                    <Pill>{ticket.data.number}</Pill>
                    <span>{ticket.data.title}</span>
                    <span>
                        {
                            ticket.data.user ?
                            ticket.data.user.firstName + ' ' + ticket.data.user.lastName :
                            'No user'
                        }
                    </span>
                    <span>
                        {
                            ticket.data.organization ?
                            ticket.data.organization.name :
                            'No organization'
                        }
                    </span>
                </TitleWrapper>
                <DescriptionWrapper>
                    <p>{ticket.data.description}</p>
                </DescriptionWrapper>
                <InfoWrapper>
                    Info
                </InfoWrapper>
                <ToDoWrapper>
                    <TodoList
                     data={ticket.data.todos}
                     onAddTodo={handleAddTodo}
                     onUpdateTodo={handleUpdateTodo}
                     onToggleTodo={handleToggleTodo}
                    />
                </ToDoWrapper>
                <CommentWrapper>
                    <CommentList />
                </CommentWrapper>
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: ticket.status.text });
} 

export default Ticket;