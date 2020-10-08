
import React from 'react';
import styled from 'styled-components';
import DownArrowSVG from './down-arrow.svg';


const SelectComponent = styled.select`
    background: none;
    appearance: none;
    outline: none;
    padding: 3px 30px 3px 3px;
    font-size: 10px;
    font-weight: 300;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: 5px;
    background-image: ${ props => 'url(' + props.backgroundImage + ')' };
    background-size: 12px;
    background-repeat: no-repeat;
    background-origin: padding-box;
    background-position: center right 5px;
    color: ${ props => props.theme.textColorOne };
    margin-right: 7px;
    margin-top: 0;
`;

const ErrorWrapper = styled.div`
    position: absolute;
    width: min-content;
    top: calc(100% + 1px);
    padding: ${ props => props.theme.largePad };
    border-radius: ${ props => props.theme.smallRound };
    height: min-content;
    z-index: 10;
    background: ${ props => props.theme.errorColorOne };
    font-size: ${ props => props.theme.smallSizeFont };
`;

const Select = ({ options, value, onChange, formState }) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    }

    return (
        <>
            <SelectComponent
             value={ value ? value : '' }
             backgroundImage={ DownArrowSVG }
             onChange={ handleChange }>
                { 
                    options ?
                    // options are structured as { value: label }
                    // value is name of property in DB
                    // value is what is presented to the user
                    Object.keys(options).map( key => {
                        const label = options[key];

                        return (
                            <option 
                             value={ key }
                             key={ key }>
                                { label }
                            </option>
                        );
                    } ) :
                    null
                }
            </SelectComponent>
            {
                formState && formState.status === 'error' ?
                <ErrorWrapper>
                    { formState.msg ? formState.msg : null }
                </ErrorWrapper> : 
                null
            }
        </>
    );
}

export default Select;