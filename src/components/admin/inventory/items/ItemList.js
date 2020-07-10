
// TODO: make fancy loading animations

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ItemListRow from './ItemListRow';

const itemUrl = 'http://localhost:9000/api/inventory/item'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: ${ props => props.theme.meduimRound };
    box-shadow: ${ props => props.theme.largeShadow };
`;

const Header = styled.div`
    width: 100%;
    min-height: 50px;
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

const ItemList = (props) => {
    const [status, setStatus] = useState({
        isLoading: true,
        isError: false,
        message: null
    });
    const [items, setItems] = useState([]);
    const [format, setFormat] = useState({
        cols: [
            { size: '1fr', dataField: 'name' },
            { size: '1fr', dataField: 'category' }
        ]
    });

    const loadItems = async () => {
        let headers = new Headers();
        headers.append('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvaWQiOiI1ZWY2OTM2ZjcxYTllODdkODAxMjJiYmEiLCJpYXQiOjE1OTQ0MDY0MjEsIm5iZiI6MTU5NDQwNjQyMSwiZXhwIjoxNTk0NDEwMDIxfQ.1w5b0LnAnWNckQa4hCG2AnGP8-6fD8nT6SB4hPDyNy0');
    
        let options = {
            method:'GET',
            headers: headers
        }
    
        try {
            let response = await fetch(itemUrl, options);
    
            if (response.status === 200) {
                let responseJson = await response.json();
                console.dir(responseJson);
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
                        <ItemListRow key={item._id} format={format} data={item} />
                    );
                })
            );
        }
    }

    return (
        <Wrapper>
            <Header colSizes={format.cols.map(elem => elem.size)}>
                {
                    format.cols.map(item => {
                        let properString = item.dataField;
                        
                        // capatalize first letter of string
                        if (properString && properString.length > 0) {
                            const firstChar = properString[0].toUpperCase();
                            properString = firstChar + properString.slice(1);
                        }

                        return (
                            <p>{properString}</p>
                        );
                    })
                }
            </Header>
            { renderItemsList() }
        </Wrapper>
    );
}

export default ItemList;