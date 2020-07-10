
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../common/Button';
import Input from '../../common/Input';

const Entry = styled.div`
    display: block;
    color: ${ props => props.completed ? props.theme.textColorTwo : 'inherit' };

    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 20px;
        border-width: 1px;
        border-style: solid;
        border-color: ${ props => props.completed ? props.theme.highlightColorOne : 
            props.theme.textColorOne };
        background: ${ props => props.completed ? props.theme.highlightColorOne : 'none' }; 
        border-radius: 10px;
    }
`;

const ControlWrapper = styled.div`
    width: max-content;
    margin-top: ${ props => props.theme.largeMargin };
`;

const Header = styled.h3`
    font-weight: ${ props => props.theme.meduimFont };
`;

const TicketToDo = (props) => {
    const ADD_TODO_INPUT_ID = 'add-todo-input-id';
    const ADD_TODO_BUTTON_ID = 'add-todo-button-id';

    const [entries, setEntries] = useState([
        {
            title: "Do it",
            completed: true
        },
        {
            title: "Finish it",
            completed: false
        }
    ]);

    const onAddEntry = (event) => {
        let inputElem = document.getElementById(ADD_TODO_INPUT_ID);

        // create the new entry
        let newEntry = {
            title: inputElem.value,
            completed: false
        };

        // TODO: post data to APU
        // TODO: get key back and add to array

        if (newEntry.title.length < 1) {
            return;
        }

        // add new entry to state
        setEntries([...entries, newEntry]);

        inputElem.value = null;
    }

    const completeEntry = () => {
        
    }

    return (
        <>
            <Header>Todo</Header>
                {
                    entries.map((entry) => {
                        return (
                            <Entry completed={entry.completed}>
                                <span onClick={completeEntry}/>
                                {entry.title}
                            </Entry>
                        )
                    })
                }
            <ControlWrapper>
                    <Entry>
                        <Input id={ADD_TODO_INPUT_ID} placeholder="New ToDo..." marginBottom="10px" />
                    </Entry>
                <Button id={ADD_TODO_BUTTON_ID} onClick={onAddEntry}>
                    Add ToDo
                </Button>
            </ControlWrapper>
        </>
    );
};

export default TicketToDo;