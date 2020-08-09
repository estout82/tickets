
// TODO: event logic in here needs some serious help

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Input from '../../../common/Input';
import Button from '../../../common/Button';

const Wrapper = styled.div`
    position: absolute;
`;

const SelectedUser = styled.p`
    display: inline-block;
    padding: 3px;
    margin-right: 5px;
    background: ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    font-size: 8pt;
    color: ${ props => props.theme.textColorOne };
`;

const UsersListWrapper = styled.div`
    position: relative;
    width: 200px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${ props => props.theme.backgroundColorTwo };
    box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
`;

const UsersListRow = styled.div`
    font-size: 10pt;
    padding: 3px;
    
    border-radius: 5px;
    border-top-left-radius: ${ props => props.first ? '0' : '5px' };
    
    &:hover {
        background: ${ props => props.theme.highlightColorTwo };
        cursor: pointer;
    }
`;

const UserPicker = (props) => {
    const [ inputValue, setInputValue ] = useState('');
    const [ usersList, setUsersList ] = useState();
    const [ showUsersList, setShowUsersList ] = useState(false);
    const [ selectedUser, setSelectedUser ] = useState();
    const lastTimeoutId = useRef();
    const inputRef = useRef();

    const handleInputChange = (newValue) => {
        setInputValue(newValue);

        // if there is a current running timeout, clear it
        if (lastTimeoutId.current) {
            clearTimeout(lastTimeoutId.current);
            lastTimeoutId.current = null;
        }

        // only set a new timeout if the value is not an empty string
        if (newValue !== '' && newValue != null) {
            lastTimeoutId.current = setTimeout(fetchData, 1000);
        } else {
            // if new value is null don't show the users list and remove selected user
            setUsersList();
            setSelectedUser();

            // TODO: this may call onChange more than required
            if (props.onChange) {
                props.onChange();
            }
        }
    }

    const handleUsersListRowClick = (event, userData) => {
        event.stopPropagation();

        setSelectedUser(userData);
        setInputValue(userData.firstName + ' ' + userData.lastName);

        doHideUsersList();

        if (props.onChange) {
            props.onChange(selectedUser);
        }
    }

    const doShowUsersList = () => {
        setShowUsersList(true);
        
        // add an event listener to blur input when clicked outside
        window.addEventListener('click', handleDocumentClick);
    }

    const doHideUsersList = () => {
        setShowUsersList(false);
        window.removeEventListener('click', handleDocumentClick);
    }

    const handleChangeButtonClick = () => {
        setSelectedUser();
        doShowUsersList();
    }

    const handleDocumentClick = (event) => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
        
        doHideUsersList();
    }

    const handleInputClick = (event) => {
        event.stopPropagation();
    }

    const fetchData = () => {
        // TODO: get data from store
        setUsersList([
            { firstName: 'Eric', lastName: 'Stoutenburg', key: '89721y3ubjbd87aus' },
            { firstName: 'Beau', lastName: 'De Graaf', key: 'asd24rdf' },
            { firstName: 'Matt', lastName: 'Cantu', key: 'asd34tffgfds' },
            { firstName: 'Ronnie', lastName: 'Norwood', key: 'tjgds42' }
        ]);

        doShowUsersList();
    }

    return (
        <Wrapper>
            {
                selectedUser ?
                <>
                    <SelectedUser>
                        { selectedUser.firstName + ' ' + selectedUser.lastName }
                    </SelectedUser>
                    <Button
                     minimal
                     onClick={ handleChangeButtonClick }>
                        Change
                    </Button>
                </> :
                <Input
                 innerRef={ inputRef }
                 onChange={ handleInputChange }
                 onClick={ handleInputClick }
                 value={ inputValue }
                 placeholder="Search Users..."
                />
            }
            {
                showUsersList ?
                <UsersListWrapper>
                    {
                        usersList ?
                        usersList.map( ( user, index ) => {
                            return (
                                <UsersListRow 
                                 key={ user.key }
                                 onClick={ (event) => handleUsersListRowClick(event, user) }>
                                    { user.firstName + user.lastName }
                                </UsersListRow>
                            )
                        } ) :
                        <UsersListRow>
                            No Data
                        </UsersListRow>
                    }
                </UsersListWrapper> :
                null
            }
        </Wrapper>
    );
}

export default UserPicker;