
import React, { useState } from 'react';
import styled from 'styled-components';

import DropdownItem from './DropdownItem';

const DropdownWrapper = styled.button`
    display: inline-block;
    position: relative;
    outline: none;
    height: min-content;
    padding: ${ props => props.theme.meduimPad };

    margin-left: ${ props => props.marginLeft ? props.marginLeft : '0' };
    margin-right: ${ props => props.marginRight ? props.marginRight : 
            props.theme.meduimMargin };
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    margin-bottom: ${ props => props.marginBottom ? props.marginBottom : '0' };

    font-size: ${ props => props.theme.smallSizeFont };
    border: 1px solid ${ props => props.theme.highlightColorOne };
    border-radius: ${ props => {
        if (props.menuShown) {
            return props.theme.smallRound + ' ' + props.theme.smallRound + 
                ' 0 0';
        } else {
            return props.theme.smallRound
        }
    }};

    background: ${ props => props.menuShown ? 
        props.theme.highlightColorOne : 'none' };
    color: ${ props => props.menuShown ? props.theme.textColorThree : props.theme.highlightColorOne };

    &:hover {
        background: ${ props => props.theme.highlightColorOne };
        color: ${ props => props.theme.textColorThree };
        transition: background ${ props => props.theme.smallTransitionSpeed },
            color ${ props => props.theme.smallTransitionSpeed };
        cursor: pointer;
    }
`;

const DropdownItemWrapper = styled.div`
    display: block;
    min-width: 100%;
    max-width: min-content;
    margin: 0;
    padding: 0;
    background: ${ props => props.theme.backgroundColorTwo } !important;
    border: 1px solid ${ props => props.theme.highlightColorOne };
    position: absolute;
    top: 26px;
    left: -1px;
    z-index: 10;
    color: ${ props => props.theme.textColorOne };
    background: inherit;
`;

const Dropdown = (props) => {
    let [menuShown, setMenuShown] = useState(false);
    let [value, setValue] = useState(null);

    // called  when mainbutton is clicked
    const handleMainButtonClick = (event) => {
        if (menuShown === false) {
            setMenuShown(true);
            document.addEventListener('click', handleMenuHide);
        }
    };

    // called to hide menu
    const handleMenuHide = (event) => {
        setMenuShown(false);
        document.removeEventListener('click', handleMenuHide);
    };

    // called when an option is selected
    const handleOptionClick = (option) => {
        setValue(option);

        // call value change callback if exists
        if (props.onChange) {
            props.onChange(option);
        }

        // call bound setter
        if (props.boundSetter) {
            props.boundSetter(option);
        }
    }

    return (
        <DropdownWrapper 
            {...props}
            onClick={handleMainButtonClick} 
            menuShown={menuShown}
        >
            {value ? value : props.defaultValue }
            {
                menuShown ?
                <DropdownItemWrapper>
                    {
                        props.options ?
                        props.options.map(option => {
                            return (<DropdownItem key={option} 
                                onClick={() => handleOptionClick(option)}>
                                {option}
                            </DropdownItem>);
                        }) : null
                    }
                </DropdownItemWrapper> : null
            }
        </DropdownWrapper>
    );
};

export default Dropdown;