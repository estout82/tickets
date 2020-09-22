
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
`;

const Select = ({ options, value, onChange }) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    }

    return (
        <SelectComponent
         backgroundImage={ DownArrowSVG }
         onChange={ handleChange }>
            { 
                options ?
                // options are structured as { value: label }
                // value is name of property in DB
                // value is what is presented to the user
                Object.keys(options).map( key => {
                    const label = options[key];

                    if (key === value) {
                        return (
                            <option
                             value={ key }
                             selected >
                                { label }
                            </option>
                        );
                    }

                    return (
                        <option
                         key={ key }
                         value={ key }>
                            { label }
                        </option>
                    );
                } ) :
                null
            }
        </SelectComponent>
    );
}

export default Select;