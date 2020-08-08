
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

const Select = (props) => {
    const handleChange = (event) => {
        if (props.onChange) {
            props.onChange(event.target.value);
        }
    }

    return (
        <SelectComponent
         backgroundImage={ DownArrowSVG }
         onChange={ handleChange }>
            { 
                props.options ?
                props.options.map( option => {
                    if (option === props.value) {
                        return (
                            <option
                             name={ option }
                             selected >
                                { option }
                            </option>
                        );
                    }

                    return (
                        <option
                         name={ option }>
                            { option }
                        </option>
                    );
                } ) :
                null
            }
        </SelectComponent>
    );
}

export default Select;