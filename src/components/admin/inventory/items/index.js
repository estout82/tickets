
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import ItemRow from './ItemRow';
import Button from '../../../common/Button';
import AddItemModal from './AddItemModal';
import { AuthUserContext } from '../../../context/AuthUserContext';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 80px;
    border-radius: ${ props => props.theme.meduimRound };
    box-shadow: ${ props => props.theme.largeShadow };
`;

const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${ props => props.colSizes.join(' ')  };
    grid-template-rows: 1fr;
    background-color: ${ props => props.theme.backgroundColorOne }; 
    border-top-left-radius: ${ props => props.theme.meduimRound };
    border-top-right-radius: ${ props => props.theme.meduimRound };

    p {
        margin: 0;
        padding: ${ props => props.theme.largePad };
    }
`;

const LoadingWrapper = styled.div`
    text-align: center;
    color: #2dafe2;

    h1 {
        font-weight: ${ props => props.theme.meduimFont };
    }
`;

const ErrorWrapper = styled.div`
    text-align: center;
    color: #f77460;

    h1 {
        font-weight: ${ props => props.theme.meduimFont };
    }
`;

const ItemListWrapper = styled.div`
    height: 100%;
`;

const ControlsWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PagenationWrapper = styled.div`
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

`;

const PageControlButton = styled.button`
    padding: 10px;
    min-width: 40px;
    margin: 0 20px;
    background: none;
    border: 1px solid ${ props => props.theme.highlightColorOne };
    border-radius: 5px;
    color: ${ props => props.theme.highlightColorOne };
    outline: none;

    :hover {
        background: ${ props => props.theme.highlightColorOne };
        color: white;
        transition: .15s background;
        cursor: pointer;
    }
`;

const PageIcon = styled.span`
    padding: 10px 0;
    min-width: 30px;
    border: ${ props => props.selected ? '1px solid ' + props.theme.textColorTwo : 'none' };
    border-radius: 10px;
    text-align: center;
    margin-right: 5px;
    font-size: 10pt;
    font-weight: 200;
`;

const Items = (props) => {
    const [status, setStatus] = useState({
        isLoading: true,
        isError: false,
        isAddItemModalShown: false,
        message: null
    });
    const [addItemModalShown, setAddItemModalShown] = useState(false);
    const [items, setItems] = useState([]);
    const [format, setFormat] = useState({
        cols: [
            { size: '1fr', dataField: 'name' },
            { size: '1fr', dataField: 'category' }
        ]
    });
    const authUser = useContext(AuthUserContext);

    const loadItems = async () => {
        const endpoint = '/api/inventory/item';

        if (!authUser.accessToken) {
            setStatus({ isLoading: false, isError: true });
            return;
        }

        let headers = new Headers();
        headers.append('x-auth', authUser.accessToken);
    
        let options = {
            method:'GET',
            headers: headers
        }
    
        try {
            let response = await fetch(endpoint, options);
    
            if (response.status === 200) {
                let responseJson = await response.json();
                setItems(responseJson.data);
                setStatus({ isLoading: false, isError: false });
            } else { 
                setStatus({ isLoading: false, isError: true });
            }
        } catch (err) {
            setStatus({ isLoading: false, isError: true });
        }
    }

    // hook to load items from API
    useEffect(() => {
        loadItems();
    }, []);

    const renderItemsList = () => {
        if (status.isLoading) {
            return (
                <LoadingWrapper>
                    <h1>Loading</h1>
                </LoadingWrapper>
            );
        } else if (status.isError) {
            return (
                <ErrorWrapper>
                    <h1>Unable to load items</h1>
                </ErrorWrapper>
            );
        } else {
            return (
                items.map(item => {
                    return (
                        <ItemRow key={item._id} format={format} data={item} 
                         onClick={() => handleItemRowClick(item._id)}/>
                    );
                })
            );
        }
    }

    const handleItemRowClick = (id) => {
        
    }

    const handleAddItemClick = () => {
        setAddItemModalShown(true);
    }

    const onAddItemModalClose = () => {
        setAddItemModalShown(false);
    }

    return (
        <Wrapper>
            <AddItemModal onClose={ onAddItemModalClose } shown={ addItemModalShown } />
            <Header colSizes={format.cols.map(elem => elem.size)}>
                {
                    format.cols.map(col => {
                        let properString = col.dataField;
                        
                        // capatalize first letter of string
                        if (properString && properString.length > 0) {
                            const firstChar = properString[0].toUpperCase();
                            properString = firstChar + properString.slice(1);
                        }

                        return (
                            <p key={col.dataField}>{properString}</p>
                        );
                    })
                }
            </Header>
            <ItemListWrapper>
                { renderItemsList() }
            </ItemListWrapper>
            <ControlsWrapper>
                <div></div>
                <PagenationWrapper>
                    <PageControlButton>&lt;</PageControlButton>
                    <PageIcon>1</PageIcon>
                    <PageIcon selected>2</PageIcon>
                    <PageIcon>. . .</PageIcon>
                    <PageControlButton>&gt;</PageControlButton>
                </PagenationWrapper>
                <ButtonWrapper>
                    <Button onClick={ handleAddItemClick }>Add Item</Button>
                </ButtonWrapper>
            </ControlsWrapper>
        </Wrapper>
    );
}

export default Items;