
import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';
import Comments from './Comments';
import useLoading from '../../../common/hooks/useLoading';
import useTicket from '../../../../config/stores/tickets/useTicket';
import Pill from '../../../common/Pill';
import CommentForm from './CommentForm';
import OrderCard from './OrderCard';
import InfoCard from './InfoCard';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
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
    height: 60px;
    align-items: center;
    padding: 0 20px;
`;

const DescriptionWrapper = styled.div`
    overflow: scroll;
    padding: 10px 20px;
    margin: 0;

    p {
        min-width: 200px;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        margin: 0;
    }
`;

const WorkflowWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 0 20px;
`;

const WorkflowCardWrapper = styled.div`
    padding-right: 10px;
`;

const InfoWrapper = styled.div`
    padding: 10px 20px;
`;

const CommentWrapper = styled.div`
    overflow: scroll;
    padding: 10px;
`;

const Ticket = ({ ticketId }) => {
    const render = useLoading();
    const ticket = useTicket(ticketId);

    const handleAddTodo = (data) => {
        // return promise returned by add todo hook in ticket store
        return ticket.addTodo(data);
    }

    const handleToggleTodo = (todoId, newCompletedValue) => {
        return ticket.updateTodo(todoId, { completed: newCompletedValue });
    }

    const handleDeleteTodo = (todoId) => {
        return ticket.deleteTodo(todoId);
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
                    <InfoCard
                     data={ ticket.data }
                     updateTicket={ ticket.update }
                    />
                </InfoWrapper>
                <WorkflowWrapper>
                    <WorkflowCardWrapper>
                        <TodoCard
                         data={ticket.data.todos}
                         handleAddTodo={handleAddTodo}
                         handleToggleTodo={handleToggleTodo}
                         handleDeleteTodo={handleDeleteTodo}
                        />
                    </WorkflowCardWrapper>
                    <WorkflowCardWrapper>
                        <OrderCard 
                         orderId={ '5f5fe64e7fd98032580c7ea5' }
                        />
                    </WorkflowCardWrapper>
                </WorkflowWrapper>
                <CommentWrapper>
                    <Comments data={ ticket.data.comments }/>
                    <CommentForm addComment={ ticket.addComment }/>
                </CommentWrapper>
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: ticket.status.text });
} 

export default Ticket;