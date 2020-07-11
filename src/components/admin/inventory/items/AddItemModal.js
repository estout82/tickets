
import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../../../common/Modal';
import FormInput from '../../../common/FormInput';
import FormSelect from '../../../common/FormSelect';
import FormText from '../../../common/FormText';
import Button from '../../../common/Button';
import LocationPicker from './LocationPicker';
import * as constants from '../../../../config/constants';
import ErrorBanner from '../../../common/ErrorBanner';

const FormWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 100px;
    grid-gap: 10px;
    padding: 10px;
`;

const FormControlWrapper = styled.div`
    height: 50px;
    padding-left: ${ props => props.theme.largePad };
    padding-top: ${ props => props.theme.largePad };
    border-bottom-left-radius: ${ props => props.theme.meduimRound };
`;

const AddItemModal = (props) => {
    // component state
    const [error, setError] = useState({ error: false, msg: [] });

    // form data state
    const [name, setName] = useState(null);
    const [category, setCategory] = useState(null);
    const [manufacture, setManufacture] = useState(null);
    const [upc, setUpc] = useState(null);
    const [price, setPrice] = useState(null);
    const [showInStore, setShowInStore] = useState(null);
    const [description, setDescription] = useState(null);
    const [sourceUrl, setSourceUrl] = useState(null);
    const [sourceVendor, setSourceVendor] = useState(null);
    const [locations, setLocations] = useState(null);

    // TODO: 2 way state binging of location data

    const requiredFormFields = [
        'name', 'category', 'locations'
    ];

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

    const handleSave = () => {
        // build object with all form data
        const data = {
            name: name,
            category: category,
            manufacture: manufacture,
            upc: upc,
            price: price,
            showInStore: showInStore,
            description: description,
            sourceUrl: sourceUrl,
            sourceVendor: sourceVendor,
            locations: locations
        };

        // validate required fields
        const validateResult = { valid: true, msg: [] };

        requiredFormFields.forEach(elem => {
            if (!data[elem]) {
                validateResult.valid = false;
                validateResult.msg.push(`Missing required field ${elem}`);
            }
        });

        if (validateResult.valid !== true) {
            // post error message
            setError({ error: true, msg: validateResult.msg });
        }

        // TODO: post to API
        // TODO: handle error
    };

    const onErrorBannerClose = () => {
        setError({ error: false, msg: [] });
    }

    return (
        <>
            {
                error.error ? 
                (
                    <ErrorBanner onClose={ onErrorBannerClose }>
                        {
                            error.msg.map(elem => <p>{elem}</p>)
                        }
                    </ErrorBanner>
                ) :
                null
            }
            <Modal size={{ width: '1000px', height: 'min-content' }} 
                    title="New Item" shown={ props.shown }>
                <FormWrapper>
                    <FormInput boundSetter={ setName } row='1 / 2' col="1 / 2" 
                        name="Name" placeholder="Name" validator={ nameValidator } />
                    <FormSelect boundSetter={ setCategory }
                        name="Category" options={ ['Adapter', 'Monitor', 'Keyboard'] } />
                    <FormInput boundSetter={ setManufacture } name="Manufacture" 
                        placeholder="Manufacture" />
                    <FormInput boundSetter={ setUpc } name="UPC" placeholder="UPC"
                        validator={ upcValidator } />
                    <FormInput boundSetter={ setPrice }name="Price" 
                        placeholder="$0.00" validator={ priceValidator } />
                    <FormInput name="Show in Store" />
                    <FormText boundSetter={ setDescription } row="2 / 4" col="1 / 5" 
                        name="Description" />
                    <FormInput boundSetter={ setSourceUrl } row="2 / 3" col="5 / 7" 
                        name="Source Url" placeholder="https://amazon.com/892yuhjkhkdjba7" 
                        validator={ sourceUrlValidator } />
                    <FormSelect boundSetter={ setSourceVendor } row="3 /4" col="5 / 7" 
                        name="Source Vendor" options={['Apple', 'Amazon', 'Tiger Direct']} />
                    <LocationPicker boundSetter={ setLocations } row="4 / 7" col="1 / 7" />
                </FormWrapper>
                <FormControlWrapper>
                    <Button onClick={ handleSave }>Save</Button>
                </FormControlWrapper>
            </Modal>
        </>
    );
};

export default AddItemModal;