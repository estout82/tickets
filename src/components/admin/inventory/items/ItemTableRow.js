
/**
 * summary: component to display a row w/ item's info in list
 * 
 * props:
 *      - 
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../common/Button';
import FormInput from '../../../common/FormInput';
import * as constants from '../../../../config/constants';

const Wrapper = styled.div`
    width: 100%;
    min-height: 50px;
    display: grid;
    grid-template-columns: ${ props => props.colSizes.join(' ') };
    grid-template-rows: 1fr;
    transition: color 2s;
    color: ${ props => props.theme.textColorOne };
    background: ${ props => props.selected ? props.theme.highlightColorTwo : null };

    &:hover {
        background: ${ props => props.theme.highlightColorTwo };
        transition: .15s background;
        cursor: pointer;
    }

    p {
        margin: 0;
        padding: ${ props => props.theme.largePad };
    }
`;

const DetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    grid-template-rows: 1fr;
    max-height: ${ props => props.shown ? '300px' : '0' };
`;

const DetailsColumn = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding-left: 10px;

    p {
        font-size: 10pt;
        font-weight: 200;

        span {
            padding-right: 5px;
            font-weight: 400;
        }
    }
`;

const DetailsRow = styled.div`
    height: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
    font-size: 10pt;
    font-weight: 200;

    span {
        padding-right: 5px;
        font-weight: 400;
    }
`;

const LoadingWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding-left: 30px;
    align-items: center;
    color: ${ props => props.theme.highlightColorTwoDark };

    h3 {
        font-size: 24pt;
        font-weight: 300;
    }
`;

const ErrorWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding-left: 30px;
    align-items: center;
    color: ${ props => props.theme.errorColorOne };

    h3 {
        font-size: 24pt;
        font-weight: 300;
    }
`;

const ItemRow = (props) => {
    // --------------------------------------------------------------------------------------------
    // hooks

    const [selected, setSelected] = useState(false);
    const [status, setStatus] = useState('done');
    const [itemDetails, setItemDetails] = useState({
        name: 'Test Item',
        description: 'Test description',
        manufacture: 'Apple',
        upc: '12345612346',
        category: 'Adapter',
        role: 'USB-C to HDMI',
        location: 'Cabinent A',
        customId: 'dong1',
        source: '',
        price: '$40.00',
        newOnHand: 1,
        refurbishedOnHand: 2,
        idealOnHand: 3,
        lastDateIssued: '',
        displayInStore: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    // --------------------------------------------------------------------------------------------
    // event handlers

    // called whenever the status changes and handles accordingly
    const onStatusChange  = (newStatus) => {

    }

    // called when a field on the form has been updated
    const onFormFieldChange = (field, newValue) => {
        let newItemDetails = { ...itemDetails };
        newItemDetails[field] = newValue;
        setItemDetails(newItemDetails);
    }

    const onSaveClick = () => {
        resetForm();
        setSelected(false);
    }

    const onCancelClick = () => {
        resetForm();
    }

    // called whenever edit button is clicked
    const onEditClick = () => {
        setStatus('editing');
    }

    const onRowClick = (itemId) => {
        setSelected(!selected);
    }

    // --------------------------------------------------------------------------------------------
    // helper functions

    const resetForm = () => {
        setStatus('loading');
    }

    // --------------------------------------------------------------------------------------------
    // render functions

    const renderDetailsLoading = () => {
        return (
            <LoadingWrapper>
                <h3>Loading...</h3>
            </LoadingWrapper>
        );
    }

    const renderDetailsError = (props) => {
        return (
            <ErrorWrapper>
                <h3>Error loading item details</h3>
            </ErrorWrapper>
        );
    }

    const renderDetailsDone = () => {
        return (
            <>
                <DetailsColumn>
                    <DetailsRow>
                        <span>Name:</span> 
                        {itemDetails.name}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Description: </span>
                        {itemDetails.description}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Manufacture: </span>
                        {itemDetails.manufacture}
                    </DetailsRow>
                    <DetailsRow>
                        <span>UPC: </span>
                        {itemDetails.upc}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Category: </span>
                        {itemDetails.category}
                    </DetailsRow>
                    <div>
                        <Button onClick={ onEditClick }>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                </DetailsColumn>
                <DetailsColumn>
                    <DetailsRow>
                        <span>Role: </span>
                        {itemDetails.role}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Location: </span>
                        {itemDetails.location}
                    </DetailsRow>
                    <DetailsRow>
                        <span>CustomId: </span>
                        {itemDetails.customId}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Source:</span>
                        {itemDetails.source}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Price:</span> 
                        {itemDetails.price}
                    </DetailsRow>
                </DetailsColumn>
                <DetailsColumn>
                    <DetailsRow>
                        <span>New On-Hand:</span> 
                        {itemDetails.newOnHand}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Rerusbished On-Hand: </span> 
                        {itemDetails.refurbishedOnHand}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Ideal On-Hand: </span>
                        {itemDetails.idealOnHand}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Date Last Issued: </span>
                        {itemDetails.lastDateIssued}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Display in Store: </span>
                        {itemDetails.displayInStore}
                    </DetailsRow>
                </DetailsColumn>
            </>
        );
    }

    const renderDetailsEditing = () => {
        return (
            <>
                <DetailsColumn>
                    <DetailsRow>
                        <span>Name:</span>
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.name } validator={ nameValidator }
                         onChange={ (value) => onFormFieldChange('name', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Description: </span>
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.description }
                         onChange={ (value) => onFormFieldChange('description', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Manufacture: </span>
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.manufacture }
                         onChange={ (value) => onFormFieldChange('manufacture', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Upc: </span>
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.upc } validator={ upcValidator }
                         onChange={ (value) => onFormFieldChange('upc', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        { /** TODO: this should be a dropdown */ }
                        <span>Category: </span>
                        { itemDetails.category }
                    </DetailsRow>
                    <div>
                        <Button onClick={ onSaveClick }>Save</Button>
                        <Button onClick={ onCancelClick }>Cancel</Button>
                    </div>
                </DetailsColumn>
                <DetailsColumn>
                    <DetailsRow>
                        { /** TODO: this sould be a dropdown */ }
                        <span>Role: </span>
                        {itemDetails.role}
                    </DetailsRow>
                    <DetailsRow>
                        { /** TODO: display location name */ }
                        <span>Location: </span>
                        { itemDetails.location }
                        <Button
                         margin="0 0 0 auto">
                            Change Location
                        </Button>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Custom Id: </span>
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.customId }
                         onChange={ (value) => onFormFieldChange('customId', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Source:</span>
                        {itemDetails.source}
                    </DetailsRow>
                    <DetailsRow>
                        <span>Price:</span> 
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.price } 
                         validator={ priceValidator }
                         onChange={ (value) => onFormFieldChange('price', value) }/>
                    </DetailsRow>
                </DetailsColumn>
                <DetailsColumn>
                    <DetailsRow>
                        <span>New On-Hand:</span> 
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.newOnHand }
                         onChange={ (value) => onFormFieldChange('newOnHand', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Refurbished On-Hand: </span> 
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.refurbishedOnHand }
                         onChange={ (value) => onFormFieldChange('refurbishedOnHand', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Ideal On-Hand: </span>
                        <FormInput margin={ '0 0 0 auto' } minimal value={ itemDetails.idealOnHand }
                         onChange={ (value) => onFormFieldChange('idealOnHand', value) }/>
                    </DetailsRow>
                    <DetailsRow>
                        <span>Last Date Issued: </span>
                        {itemDetails.lastDateIssued}
                    </DetailsRow>
                    <DetailsRow>
                        { /** TODO: make this a checkbox */ }
                        <span>Display in Store: </span>
                        {itemDetails.displayInStore}
                    </DetailsRow>
                </DetailsColumn>
            </>
        );
    }

    const renderDetails = () => {
        switch (status) {
            case 'loading':
                return renderDetailsLoading();
            case 'error':
                return renderDetailsError();
            case 'editing':
                return renderDetailsEditing();
            case 'done':
                return renderDetailsDone();
            default:
                return null;
        }
    }

    // --------------------------------------------------------------------------------------------
    // validators

    const nameValidator = (value) => {
        if (value === constants.EMPTY_STRING) {
            return { msg: 'Please enter a name' };
        } else {
            return true;
        }
    }

    const upcValidator = (value) => {
        if (/[0-9]{12}/.test(value) || value === constants.EMPTY_STRING) {
            return true;
        } else {
            return { msg: 'Please enter a 12-digit UPC' }
        }
    }

    const priceValidator = (value) => {
        if (/\$[0-9]+\.[0-9]{2}/.test(value) || value === constants.EMPTY_STRING) {
            return true;
        } else {
            return { msg: 'Please enter a valid price $x.xx' };
        }
    }

    // TODO: make this a real url validator
    const sourceUrlValidator = (value) => {
        if (/(http:\/\/|https:\/\/)[^\.]+\.[^\.]+/.test(value) || 
            value === constants.EMPTY_STRING) {
            return true;
        } else {
            return { msg: 'Please enter a valid url' };
        }
    }

    return (
        <>
            <Wrapper colSizes={ props.format.cols.map(col => col.size) }
            onClick={ onRowClick } selected={ selected }>
                {
                    props.format.cols.map(col => {
                        const data = props.data[col.dataField];

                        if (data == null) {
                            return <p key={ col.dataField }>Unknown</p>
                        }

                        return (
                            <p key={ col.dataField }>{ data }</p>
                        );
                    })
                }
            </Wrapper>
            {
                selected ?
                <DetailsWrapper shown={ selected }>
                    { renderDetails() }
                </DetailsWrapper>
                : null
            }
        </>
    );
}

export default ItemRow;