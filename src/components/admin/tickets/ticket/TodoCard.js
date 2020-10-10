
// TODO: add displayed error messages for this!

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../common/Button';
import Input from '../../../common/Input';
import useForm from '../../../common/hooks/useForm';
import ExButton from '../../../common/ExButton';

const Wrapper = styled.div`
    min-width: 200px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
`;

const Header = styled.h3`
    font-weight: ${ props => props.theme.meduimFont };
`;

const Todo = styled.div`
    display: flex;
    flex-flow: row no wrap;
    align-items: center;
    color: ${ props => props.completed ? props.theme.textColorTwo : 'inherit' };
`;

const TodoToggleButton = styled.button`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-width: 1px;
    margin-right: 10px;
    border-style: solid;
    border-color: ${ props => props.completed ? props.theme.highlightColorOne : 
        props.theme.textColorOne };
    background: ${ props => props.completed ? props.theme.highlightColorOne : 'none' }; 
    border-radius: 10px;

    :hover {
        cursor: pointer;
    }
`;

const TodoText = styled.p`
    flex-grow: 1;
`;

const CancelButtonWrapper = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    width: 20px;
`;

const TodoFormWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;
`;

const TodoCard = ({ data, handleAddTodo, handleToggleTodo, handleDeleteTodo }) => {
    const [addingTodo, setAddingTodo] = useState(false);
    const form = useForm({
        label: ''
    });

    const handleToggleButtonClick = (todoId, newValue) => {
        handleToggleTodo(todoId, newValue);
    }

    const handleAddTodoButtonClick = () => {
        setAddingTodo(true);
    }

    const handleAddTodoSaveButtonClick = () => {
        form.handleSubmit((values, state) => {
            // return promise from useTicket hook (passed into props)
            // also, pass form data into the handler
            return handleAddTodo({
                label: values.label
            });
        })
        .then(status => {
            // TODO:
        })
        .catch(status => {
            // TODO:
        });

        form.doReset();
        setAddingTodo(false);
    }

    const handleAddTodoCancelButtonClick = () => {
        setAddingTodo(false);
        form.doReset();
    }

    const handleTodoDeleteButtonClick = (todoId) => {
        handleDeleteTodo(todoId);
        form.doReset();
    }

    return (
        <Wrapper>
            <Header>Todo</Header>
            {
                data.map((todo, index) => {
                    return (
                        <Todo 
                         key={ todo._id }
                         completed={ todo.completed }>
                            <TodoToggleButton 
                             completed={ todo.completed }
                             onClick={ () => handleToggleButtonClick(todo._id, !todo.completed) }
                            />
                            <TodoText>{ todo.label }</TodoText>
                            <CancelButtonWrapper>
                                <ExButton onClick={ () => handleTodoDeleteButtonClick(todo._id) }/>
                            </CancelButtonWrapper>
                        </Todo>
                    );
                })
            }
            <TodoFormWrapper>
                {
                    addingTodo ?
                    <>
                        <Input value={form.values.label} onChange={ (v) => form.handleChange('label', v) }/>
                        <Button minimal onClick={ handleAddTodoSaveButtonClick }>Save</Button>
                        <Button minimal onClick={ handleAddTodoCancelButtonClick }>Cancel</Button>
                    </> :
                    <Button 
                     minimal
                     onClick={ handleAddTodoButtonClick }>
                        +
                    </Button>
                }
            </TodoFormWrapper>
        </Wrapper>
    );
};

export default TodoCard;